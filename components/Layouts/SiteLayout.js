// components/layout.js

import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'

export default function Layout({ children }) {
  return (
    <div className="flex relative px-12 lg:pl-24 lg:pr-0 text-white bg-black">
      <main className="pt-12 flex-1">
      <Header />
        {children}
      <Footer />
        </main>
        <SideMenu />
    </div>
  )
}