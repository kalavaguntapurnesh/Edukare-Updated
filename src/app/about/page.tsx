"use client";

import Navbar from "@/app/components/Navbar"
import About from "@/app/about/About"
import Footer from "@/app/components/Footer"
import ScrollToTop from "@/app/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <About/>
      <ScrollToTop/>
      <Footer/>
    </main>
  )
}
