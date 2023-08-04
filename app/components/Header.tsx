"use client";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="h-24  flex justify-center">
      <div className="w-[1200px] flex justify-between items-center py-6 px-6 md:px-0">
        <a href="#home">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-green-base font-bold">
            Embala Brasil
          </h1>
        </a>
        <nav>
          <ul className="hidden md:flex items-center gap-5  ">
            <Link href="/#sobre">
              <li>Sobre</li>
            </Link>
            <Link href="/#produtos">
              <li>Produtos</li>
            </Link>
            <Link href="/#contato">
              <li>Contato</li>
            </Link>
            <li className="w-48 bg-green-base rounded-md p-2 flex items-center justify-center hover:bg-green">
              <a
                href="https://api.whatsapp.com/send?phone=5599991402932
"
                target="_blank"
              >
                Realizar Pedido
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setNav(true)}>
          <AlignJustify />
        </button>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70 z-10"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-yellow-base p-10 ease-in duration-500 flex flex-col justify-center"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <nav>
            <ul className="flex flex-col items-center gap-5  ">
              <Link href="/#sobre">
                <li onClick={() => setNav(false)}>Sobre</li>
              </Link>
              <Link href="/#produtos">
                <li onClick={() => setNav(false)}>Produtos</li>
              </Link>
              <Link href="/#contato">
                <li onClick={() => setNav(false)}>Contato</li>
              </Link>
              <li className="w-48 bg-green-base rounded-md p-2 flex items-center justify-center hover:bg-green">
                <a
                  href="https://api.whatsapp.com/send?phone=5599991402932
"
                  target="_blank"
                >
                  Realizar Pedido
                </a>
              </li>
              <li onClick={() => setNav(false)}>
                <X />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
