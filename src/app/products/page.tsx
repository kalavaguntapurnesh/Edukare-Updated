"use client";
import Navbar from "@/app/components/Navbar"
import Products from "@/app/products/Products"
import Footer from "@/app/components/Footer"
import ScrollToTop from "@/app/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Products/>
      <ScrollToTop/>
      <Footer/>
    </main>
  )
}
