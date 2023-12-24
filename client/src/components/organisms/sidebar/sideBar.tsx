'use client'

import { FunctionComponent, useState } from 'react'

import Link from 'next/link'
import {
  DownloadCloud,
  Grid3X3,
  LayoutDashboard,
  MousePointerSquare,
  Tv2,
} from 'lucide-react'

import { usePathname } from 'next/navigation'

const Sidebar: FunctionComponent = () => {
  const pathname = usePathname()

  const [hide, sethide] = useState<boolean>(false)

  const toggle = () => sethide(!hide)

  return (
    <section className="c-sidebar">
      <Link
        href="dashboard"
        className={pathname === '/dashboard' ? 'active' : ''}
        onClick={() => sethide(false)}
      >
        <LayoutDashboard />
        Dashboard
      </Link>
      <button
        onClick={toggle}
        className={
          pathname === '/dashboard/inspection/summary' ||
          pathname === '/dashboard/inspection/display' ||
          pathname === '/dashboard/inspection/download'
            ? 'active'
            : ''
        }
      >
        <MousePointerSquare />
        Inspections
      </button>
      <div
        className={
          !hide
            ? 'c-sidebar__sub-menu c-sidebar__sub-menu--hide'
            : 'c-sidebar__sub-menu c-sidebar__sub-menu--link active'
        }
      >
        <Link
          href="/dashboard/inspection/summary"
          className={
            pathname === '/dashboard/inspection/summary' ? 'active' : ''
          }
        >
          <Grid3X3 />
          Summary
        </Link>
        <Link
          href="/dashboard/inspection/display"
          className={
            pathname === '/dashboard/inspection/display' ? 'active' : ''
          }
        >
          <Tv2 />
          Display
        </Link>
        <Link
          href="/dashboard/inspection/download"
          className={
            pathname === '/dashboard/inspection/download' ? 'active' : ''
          }
        >
          <DownloadCloud />
          Download
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
