import Image, { StaticImageData } from "next/image";

interface ProductsCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const ProductCard = ({
  description,
  image,
  title,
}: ProductsCardProps) => {
  return (
    <div className=" flex gap-4 mt-12">
      <div className="w-[200px] flex justify-center items-center bg-yellow-base rounded-md shadow-md">
        <Image src={image} alt="" width={150} height={150} />
      </div>
      <div className="w-[500px] flex flex-col justify-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
