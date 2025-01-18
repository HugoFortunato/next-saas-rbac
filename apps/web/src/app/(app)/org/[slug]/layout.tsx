import { getCurrentOrg } from '@/auth/auth'
import { Header } from '@/components/header'
import { Tabs } from '@/components/tabs'

export default function OrgLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { slug: string }
}>) {
  return (
    <div>
      <div className="pt-6">
        <Header />
        <Tabs slug={params.slug} />
      </div>

      <main className="mx-auto w-full max-w-[1200px] py-4">{children}</main>
    </div>
  )
}
