import Courses from '../components/Courses'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CoursesPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-20" />
      <Courses />
      <Footer />
    </div>
  )
}