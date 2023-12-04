"use client";
import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import Features from "@/app/features/Features"
import Footer from "@/app/components/Footer"
import ScrollToTop from "@/app/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Features/>
      <Footer/>
    </main>
  )
}
