import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function ProductCard({ product }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition p-4">
      <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 grid place-items-center overflow-hidden">
        {product.image_url ? (
          <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white/70">Material</span>
        )}
      </div>
      <div className="pt-3">
        <h3 className="text-white font-semibold">{product.title}</h3>
        <p className="text-blue-200/80 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white font-bold">${'{'}product.price{'}'}</span>
          <button className="px-3 py-1.5 rounded-lg bg-fuchsia-500 text-white text-sm hover:bg-fuchsia-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API}/products`).then(r => r.json()).then(setItems);
  }, []);

  return (
    <section id="products" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Study Materials</h2>
            <p className="text-blue-200/80">Notes, PDFs, and resources</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
    </section>
  );
}
