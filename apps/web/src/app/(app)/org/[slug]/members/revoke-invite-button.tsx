import { XOctagon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { revokeInviteAction } from './actions'

interface RevokeInviteButtonProps {
  inviteId: string
  currentOrg: string
}

export function RevokeInviteButton({
  inviteId,
  currentOrg,
}: RevokeInviteButtonProps) {
  return (
    <form action={revokeInviteAction.bind(null, inviteId, currentOrg)}>
      <Button size="sm" variant="destructive">
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}
