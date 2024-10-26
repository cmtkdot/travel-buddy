'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-2">
      <h2 className="text-destructive">Something went wrong!</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  )
}
