import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Products from './components/Products'
import Founder from './components/Founder'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Courses />
      <Products />
      <Founder />
      <Footer />
    </div>
  )
}

export default App