import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className="not-found">
        <h1>404</h1>

        <p>
          This page does not exist.
        </p>

        <a href="/">
          Return Home
        </a>

      </section>
    </main>
  );
}