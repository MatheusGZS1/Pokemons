
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

import Head from 'next/head'


export const metadata = {
  title: 'AnimeView',
 
}

export default function RootLayout({ children }) {
  return (
<>
<link rel="icon" href="/favicon.ico" sizes="any" />
    <body>
     
    <Navbar />
   <main className="main-container">{children}</main> 
    <footer><Footer /></footer>
    </body>

    </>
  )
}
