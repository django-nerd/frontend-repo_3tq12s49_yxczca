import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProductsPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-20" />
      <Products />
      <Footer />
    </div>
  )
}