import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Embala Brasil || Açailândia-MA",
  description:
    "Embala Brasil em Açailândia, MA: Sua loja especializada em embalagens de qualidade. Encontre sacos, sacolas, marmitex, e produtos para sorvete e geladinho. Oferecemos opções versáteis e resistentes para atender às suas necessidades de embalagem. Seja você um pequeno negócio local ou empreendedor, a Embala Brasil tem soluções para embalar com eficiência e estilo. Confira nosso catálogo e proteja seus produtos com excelência. Visite-nos em Açailândia, MA e descubra como embalar nunca foi tão fácil!",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
