"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const featured = [
    {
      image: "/images/look1.jpg",
      title: "Editorial Collection",
    },
    {
      image: "/images/look2.jpg",
      title: "Luxury Portrait",
    },
    {
      image: "/images/look3.jpg",
      title: "Creative Vision",
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="hero">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          WALRUOP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Luxury. Vision. Identity.
        </motion.p>

        <motion.a
          href="/portfolio"
          className="hero-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          Explore Collection
        </motion.a>

      </section>


      <section className="featured">

        <h2>FEATURED WORK</h2>

        <div className="featured-grid">

          {featured.map((item, index) => (

            <motion.div
              className="featured-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="featured-overlay">
                {item.title}
              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}