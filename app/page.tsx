export default function HomePage() {
  return (
    <main style={{ padding: "40px", background: "black", color: "white" }}>
      <h1 style={{ fontSize: "60px", color: "red" }}>
        THIS IS THE NEW WALRUOP PAGE
      </h1>
    </main>
  );
}
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-sm tracking-[0.5em] text-gray-400 mb-6">
          PREMIUM FASHION HOUSE
        </p>

        <h1 className="text-7xl md:text-9xl font-light tracking-widest">
          WALRUOP
        </h1>

        <p className="mt-8 max-w-xl text-gray-300 text-lg leading-relaxed">
          A modern luxury brand built around identity, creativity and
          timeless expression.
        </p>

        <button className="mt-10 border border-white px-10 py-4 tracking-widest hover:bg-white hover:text-black transition">
          EXPLORE COLLECTION
        </button>
      </section>


      {/* About Section */}
      <section className="py-24 px-8 md:px-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400 tracking-widest text-sm mb-5">
            THE VISION
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            Luxury is not about being seen.
            <br />
            It is about being remembered.
          </h2>

          <p className="mt-8 text-gray-400 max-w-2xl">
            Walruop represents a new generation of elegance,
            combining fashion, art and digital culture into one
            distinctive identity.
          </p>
        </div>
      </section>


      {/* Featured Cards */}
      <section className="grid md:grid-cols-3 gap-6 px-8 md:px-20 py-24">

        <div className="h-96 border border-gray-800 flex items-end p-8 hover:border-white transition">
          <div>
            <p className="text-gray-400 text-sm">01</p>
            <h3 className="text-3xl font-light">
              COLLECTION
            </h3>
          </div>
        </div>


        <div className="h-96 border border-gray-800 flex items-end p-8 hover:border-white transition">
          <div>
            <p className="text-gray-400 text-sm">02</p>
            <h3 className="text-3xl font-light">
              STORIES
            </h3>
          </div>
        </div>


        <div className="h-96 border border-gray-800 flex items-end p-8 hover:border-white transition">
          <div>
            <p className="text-gray-400 text-sm">03</p>
            <h3 className="text-3xl font-light">
              LEGACY
            </h3>
          </div>
        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center">
        <h2 className="text-2xl tracking-[0.4em]">
          WALRUOP
        </h2>

        <p className="text-gray-500 mt-4 text-sm">
          © 2026 Walruop. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
