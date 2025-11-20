import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="mt-4 text-blue-200/85">We are a modern educational platform combining recorded video courses with a curated store of premium learning materials. Our mission is to make learning immersive, accessible, and effective for students everywhere.</p>
      </div>
      <Footer />
    </div>
  )
}