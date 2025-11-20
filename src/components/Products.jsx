import { useEffect, useState } from 'react'
import { Package } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${backend}/api/products`).then(r => r.json()).then(setProducts).catch(() => setProducts([]))
  }, [])

  return (
    <section id="products" className="relative py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-white">Education Materials Store</h2>
            <p className="text-blue-200/80 mt-1">Books, notes, printable worksheets, and more</p>
          </div>
          <a href="/products" className="text-blue-300 hover:text-white">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 && [1,2,3].map(i => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 animate-pulse h-64"/>
          ))}

          {products.map(p => (
            <div key={p.id} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-video overflow-hidden">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="w-full h-full grid place-items-center bg-gradient-to-br from-blue-800/40 to-violet-800/40">
                    <Package className="text-white/70" size={42} />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-blue-200/80 text-sm line-clamp-2 mt-1">{p.description}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-white font-semibold">${p.price.toFixed(2)}</span>
                  <a href="#" className="text-blue-300 hover:text-white">Add to cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
