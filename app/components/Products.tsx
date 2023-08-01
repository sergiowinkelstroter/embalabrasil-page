import { ProductCard } from "./ProductCard";
import Copo from "/public/products/copo.png";
import Talher from "/public/products/talher.png";
import PapelToalha from "/public/products/papel-toalha.png";
import Marmitex from "/public/products/marmitex.png";
import Sacolas from "/public/products/sacolas.png";
import KitPote from "/public/products/kit-pote.png";

export const Products = () => {
  return (
    <div id="produtos" className="bg-green-base py-16">
      <div className="max-w-[1200px] m-auto">
        <h3 className="text-3xl  font-semibold">Nossos Produtos</h3>
        <section className="flex justify-between items-center">
          <ProductCard
            title="Papel Toalha"
            description="
              Deixe seu dia mais prático com os papéis toalha interfolhados, produzidos com matéria prima de alta qualidade, oferecendo higiene, maciez e alta absorção."
            image={PapelToalha}
          />
          <div></div>
        </section>

        <section className="flex justify-between items-center">
          <div></div>
          <ProductCard
            title="Talheres descartáveis"
            description="
            Deixe seu dia mais prático com os talheres descartáveis, produzidos com matéria prima de alta qualidade, oferecem higiene, resistência e versatilidade."
            image={Talher}
          />
        </section>
        <section className="flex justify-between items-center">
          <ProductCard
            title="Copos descartáveis"
            description="
              Copos descartáveis resistentes: Práticos e confiáveis para bebidas quentes e frias. 
              Feitos com materiais de alta qualidade, oferecem durabilidade, evitam vazamentos e deformações.
              Perfeitos para eventos, lanchonetes e escritórios."
            image={Copo}
          />
          <div></div>
        </section>
        <section className="flex justify-between items-center">
          <div></div>
          <ProductCard
            title="Marmitex Isopor"
            description="
            Experimente a praticidade e qualidade das marmitex de isopor. Leves, resistentes e com excelente isolamento térmico, nossas embalagens mantêm a frescura dos alimentos por mais tempo. Disponíveis em vários tamanhos, são ideais para restaurantes, lanchonetes, food trucks e uso doméstico. "
            image={Marmitex}
          />
        </section>
        <section className="flex justify-between items-center">
          <ProductCard
            title="Sacolas"
            description="
            Na Embala Brasil, oferecemos sacolas de alta qualidade que combinam funcionalidade e estilo. Nossa variedade de tamanhos, cores e designs atende a diversas necessidades de embalagem.
            "
            image={Sacolas}
          />
          <div></div>
        </section>
        <section className="flex justify-between items-center">
          <div></div>
          <ProductCard
            title="Kit Pote e Tampa"
            description="
            Potencialize a proteção dos seus produtos com nossos potes duráveis e tampas herméticas, mantendo o frescor e qualidade por mais tempo. Versatilidade, confiabilidade e praticidade em um único kit, perfeito para empreendedores e uso doméstico.
            "
            image={KitPote}
          />
        </section>
      </div>
    </div>
  );
};
