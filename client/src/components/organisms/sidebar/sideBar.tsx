'use client'

import { FunctionComponent, useState } from 'react'

import Link from 'next/link'
import {
  DownloadCloud,
  Grid3X3,
  LayoutDashboard,
  MousePointerSquare,
  Tv2,
  Users,
} from 'lucide-react'

import { usePathname } from 'next/navigation'

const Sidebar: FunctionComponent = () => {
  const pathname = usePathname()

  const [hide, sethide] = useState<boolean>(false)

  const toggle = () => sethide(!hide)

  return (
    <section className="c-sidebar">
      <Link
        href="/dashboard"
        className={pathname === '/dashboard' ? 'active' : ''}
        onClick={() => sethide(false)}
      >
        <LayoutDashboard />
        Dashboard
      </Link>
      <Link
        href="/dashboard/team"
        className={pathname === 'team' ? 'active' : ''}
        onClick={() => sethide(false)}
      >
        <Users />
        Equipe
      </Link>
      <button
        onClick={toggle}
        className={
          pathname === '/dashboard/document' ||
          pathname === '/dashboard/document/add' ||
          pathname === '/dashboard/document/download'
            ? 'active'
            : ''
        }
      >
        <MousePointerSquare />
        Documents
      </button>
      <div
        className={
          !hide
            ? 'c-sidebar__sub-menu c-sidebar__sub-menu--hide'
            : 'c-sidebar__sub-menu c-sidebar__sub-menu--link active'
        }
      >
        <Link
          href="/dashboard/document"
          className={pathname === '/dashboard/document' ? 'active' : ''}
        >
          <Tv2 />
          Afficher
        </Link>
        <Link
          href="/dashboard/document/add"
          className={pathname === '/dashboard/document/add' ? 'active' : ''}
        >
          <Grid3X3 />
          Ajouter un document
        </Link>
        <Link
          href="/dashboard/document/download"
          className={
            pathname === '/dashboard/document/download' ? 'active' : ''
          }
        >
          <DownloadCloud />
          Télécharger
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
