import Image from "next/image";
import Icon from "/public/icon.png";

export const Header = () => {
  return (
    <header className="h-24  flex justify-center">
      <div className="w-[1200px] flex justify-between items-center py-6">
        <a href="#home">
          <h1 className="text-4xl text-green-base font-bold">Embala Brasil</h1>
        </a>
        <nav>
          <ul className="flex items-center gap-5 uppercase">
            <li>
              <a href="#sobre">sobre</a>
            </li>
            <li>
              <a href="#produtos">produtos</a>
            </li>
            <li>
              <a href="#contato">contato</a>
            </li>
            <li className="w-40 bg-green-base rounded-md p-2 flex items-center justify-center font-semibold uppercase hover:bg-green">
              <a
                href="https://api.whatsapp.com/send?phone=5599991402932
"
                target="_blank"
              >
                Realizar pedido
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
