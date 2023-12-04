"use client";
import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import Contact from "@/app/contact/Contact"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Contact/>
      <Footer/>
    </main>
  )
}

