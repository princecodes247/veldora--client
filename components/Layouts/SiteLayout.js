// components/layout.js

import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'

export default function Layout({ children }) {
  return (
    <div className="relative flex px-4 text-white bg-no-repeat bg-cover sm:px-12 lg:pl-24 lg:pr-0 bg-main">
      <main className="flex-1 pt-12">
      <Header />
        {children}
      <Footer />
        </main>
        <SideMenu />
    </div>
  )
}