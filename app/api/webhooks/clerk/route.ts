import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Missing WEBHOOK_SECRET')
  }

  // Verify webhook signature
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Verify with Svix
  const wh = new Webhook(WEBHOOK_SECRET)
  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', { status: 400 })
  }

  // Handle different webhook events
  switch (evt.type) {
    case 'user.created':
      await db.user.create({
        data: {
          id: evt.data.id,
          email: evt.data.email_addresses[0]?.email_address,
          name: `${evt.data.first_name} ${evt.data.last_name}`,
        }
      })
      break;
      
    case 'user.updated':
      await db.user.update({
        where: { id: evt.data.id },
        data: {
          email: evt.data.email_addresses[0]?.email_address,
          name: `${evt.data.first_name} ${evt.data.last_name}`,
        }
      })
      break;
  }

  return new Response('', { status: 200 })
}
