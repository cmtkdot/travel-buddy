import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: Request) {
  // Verify the webhook signature
  const headersList = await headers()
  const svix_id = headersList.get("svix-id")
  const svix_timestamp = headersList.get("svix-timestamp")
  const svix_signature = headersList.get("svix-signature")

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 })
  }

  // Get the body
  const payload = await req.json()
  const evt = payload as WebhookEvent

  try {
    switch (evt.type) {
      case 'user.created':
        // Handle user creation
        await db.insert(users).values({
          id: evt.data.id,
          email: evt.data.email_addresses[0]?.email_address ?? null,
        })
        break;

      case 'user.updated':
        // Handle user update
        await db
          .update(users)
          .set({
            email: evt.data.email_addresses[0]?.email_address ?? null,
          })
          .where(eq(users.id, evt.data.id))
        break;
    }

    return new Response('Webhook processed successfully', { status: 200 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response('Webhook processing failed', { status: 500 })
  }
}
