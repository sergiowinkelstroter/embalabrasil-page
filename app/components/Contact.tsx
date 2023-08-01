"use client";
import { Phone, Mails } from "lucide-react";
import GoogleMapsComponent from "./GoogleMaps";

export const Contact = () => {
  return (
    <div
      id="contato"
      className="max-w-[1200px] m-auto my-16 flex flex-col gap-10"
    >
      <h3 className="text-3xl text-green-base font-semibold">
        Nossos Contatos
      </h3>
      <div className="flex gap-10">
        <div className="flex gap-2  items-center ">
          <span className="w-16 h-16 bg-green-base rounded-md flex items-center justify-center">
            <Phone />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Telefone</span>
            <span>(99) 99140-2932</span>
          </div>
        </div>
        <div className="flex gap-2  items-center ">
          <span className="w-16 h-16 bg-green-base rounded-md flex items-center justify-center">
            <Mails />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Email</span>
            <span>embalagensbrasil1972@gmail.com</span>
          </div>
        </div>
      </div>
      <GoogleMapsComponent />
    </div>
  );
};
