import { Outlet } from 'react-router-dom'

import { ProjectNavigation } from './_components/ProjectNavigation'
import { SettingsButton } from './_components/Settings'
import { SocialIcon } from 'react-social-icons'
import KofiButton from 'kofi-button'

export function Layout() {
  return (
    <main className="scroll-container flex h-screen w-full flex-col-reverse gap-4 overflow-auto p-4 xl:flex-row">
      <div className="absolute top-4 right-4">
        <SettingsButton />
      </div>
      <div className="xl:scroll-container bottom-0 w-full flex-none xl:w-64">
        <ProjectNavigation />
      </div>
      <Outlet />
      <div style={{ padding: "1rem" }} />
      <div style={{ borderRadius: "50px", background: "white", transform: "translate(-150px)" }} className="bottom-center">
        <SocialIcon url="https://github.com/atopheim/focushq" />
      </div>
      <div style={{ borderRadius: "8px", transform: "translate(10px,-5px)" }} className="bottom-center">
        <KofiButton color="#0a9396" title="Donate" kofiID="torbjornopheim" />
      </div>
    </main>
  )
}
