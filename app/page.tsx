export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="mb-6 text-sm tracking-[0.5em] uppercase text-gray-400">
          Welcome to
        </p>

        <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em]">
          WALRUOP
        </h1>

        <p className="mt-8 max-w-xl text-gray-400 text-lg leading-relaxed">
          Fashion. Identity. Movement.
          <br />
          A new vision of modern culture.
        </p>

        <a
          href="#about"
          className="mt-12 border border-white px-8 py-4 text-sm tracking-[0.3em] uppercase transition hover:bg-white hover:text-black"
        >
          Discover
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-4xl text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-gray-500 mb-6">
            The Vision
          </p>

          <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-10">
            Built Different.
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-8">
            WALRUOP is a creative platform built around individuality,
            fashion, music and culture. We believe style is more than what you
            wear — it is how you move, create and leave your mark.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-32 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.4em] uppercase text-gray-500 mb-6">
            Featured
          </p>

          <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-16">
            Latest Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/5] border border-gray-800 flex items-center justify-center">
              <span className="text-gray-600 tracking-[0.3em] text-sm">
                PROJECT 01
              </span>
            </div>

            <div className="aspect-[4/5] border border-gray-800 flex items-center justify-center">
              <span className="text-gray-600 tracking-[0.3em] text-sm">
                PROJECT 02
              </span>
            </div>

            <div className="aspect-[4/5] border border-gray-800 flex items-center justify-center">
              <span className="text-gray-600 tracking-[0.3em] text-sm">
                PROJECT 03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 border-t border-gray-900">
        <p className="text-sm tracking-[0.4em] uppercase text-gray-500 mb-6">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-6xl font-light tracking-wide">
          Let's Create.
        </h2>

        <a
          href="mailto:walruopmodel@gmail.com"
          className="mt-10 border border-white px-8 py-4 text-sm tracking-[0.25em] uppercase transition hover:bg-white hover:text-black"
        >
          Contact
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center">
        <h2 className="text-2xl tracking-[0.4em]">WALRUOP</h2>

        <p className="mt-4 text-sm text-gray-600">
          © {new Date().getFullYear()} WALRUOP. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
