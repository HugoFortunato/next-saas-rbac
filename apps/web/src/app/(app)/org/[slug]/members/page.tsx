import { ability } from '@/auth/auth'

import { Invites } from './invites'
import { MemberList } from './member-list'

export default async function MembersPage({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const currentOrg = params.slug

  const permissions = await ability()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Members</h1>

      <div className="space-y-4">
        {permissions?.can('get', 'Invite') && (
          <Invites currentOrg={currentOrg} />
        )}
        {permissions?.can('get', 'User') && (
          <MemberList currentOrg={currentOrg} />
        )}
      </div>
    </div>
  )
}
