import Image from "next/image";
import Icon from "/public/icon.png";

export const About = () => {
  return (
    <div
      id="sobre"
      className="max-w-[1200px] m-auto  flex justify-between my-16 items-center"
    >
      <div className="w-[600px] px-6">
        <h3 className="text-2xl md:text-3xl text-green-base font-semibold">
          Sobre Nós
        </h3>
        <p className="text-sm md:text-md italic">
          <br /> Bem-vindo à Embala Brasil! <br /> <br /> Somos uma loja
          especializada em embalagens, que nasceu do sonho de oferecer soluções
          práticas e criativas para os negócios locais e empreendedores
          apaixonados.Nossa jornada começou há 6 anos, quando percebemos a
          importância das embalagens para a experiência do cliente e o sucesso
          de um negócio. Acreditamos que cada produto merece ser cuidadosamente
          protegido e apresentado, pois a embalagem é a primeira impressão que o
          cliente tem daquilo que oferecemos. <br /> <br /> Na Embala Brasil,
          você encontrará uma ampla gama de opções para embalar seus produtos
          com eficiência e estilo. Desde sacos e sacolas resistentes, ideais
          para lojas e estabelecimentos comerciais, até marmitex práticos e
          produtos específicos para sorvete e geladinho, nossa seleção foi
          cuidadosamente escolhida para atender às suas necessidades.
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={Icon} alt="" width={280} height={280} />
      </div>
    </div>
  );
};
