"use client";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { TopButton } from "./components/TopButton";
import { useEffect, useState } from "react";

export default function Main() {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <main>
      <Header />
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
      {topButton && <TopButton />}
    </main>
  );
}
