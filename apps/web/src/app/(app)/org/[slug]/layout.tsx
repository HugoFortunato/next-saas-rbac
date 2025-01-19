import { getCurrentOrg } from '@/auth/auth'
import { Header } from '@/components/header'
import { Tabs } from '@/components/tabs'

type Params = { slug: string }

export default async function OrgLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Params | Promise<Params>
}>) {
  const resolvedParams = await Promise.resolve(params)

  return (
    <div>
      <div className="pt-6">
        <Header />
        <Tabs slug={resolvedParams.slug} />
      </div>

      <main className="mx-auto w-full max-w-[1200px] py-4">{children}</main>
    </div>
  )
}
