export default function Founder() {
  return (
    <section className="relative py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2">
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop" alt="Founder" className="rounded-xl w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-blue-300 text-sm tracking-wide uppercase">Founder</p>
            <h3 className="text-3xl font-semibold text-white mt-2">A message from our founder</h3>
            <p className="text-blue-200/85 mt-3 max-w-2xl">
              Our mission is to make high‑quality education accessible to everyone. With immersive video courses and curated materials, we help students learn faster and achieve more.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-white text-xl font-semibold">10+ yrs</p>
                <p className="text-blue-200/80 text-sm">Teaching experience</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-white text-xl font-semibold">50K+</p>
                <p className="text-blue-200/80 text-sm">Students taught</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-white text-xl font-semibold">200+</p>
                <p className="text-blue-200/80 text-sm">Videos created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
