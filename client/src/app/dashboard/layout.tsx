'use server'

import { ReactNode, Suspense } from 'react'
import SideBar from '@/components/organisms/sidebar/sideBar'
import TopBar from '@/components/organisms/topbar/topBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="c-layout-dashboard">
        <SideBar />
        <div className="c-layout-dashboard__container">
          <TopBar />
          {children}
        </div>
      </section>
    </Suspense>
  )
}

export default Layout
