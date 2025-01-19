import { getCurrentOrg } from '@/auth/auth'
import { Header } from '@/components/header'
import { Tabs } from '@/components/tabs'

type LayoutProps = {
  children: React.ReactNode
  params: any
}

export default function OrgLayout({ children, params }: LayoutProps) {
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
