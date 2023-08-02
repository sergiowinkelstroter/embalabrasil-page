export const Header = () => {
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
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
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
      </div>
    </header>
  );
};
