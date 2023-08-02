"use client";
import { Phone, Mails } from "lucide-react";
import GoogleMapsComponent from "./GoogleMaps";

export const Contact = () => {
  return (
    <div
      id="contato"
      className="max-w-[1200px] m-auto my-16 mx-6 md:mx-auto flex flex-col gap-10"
    >
      <h3 className="text-3xl text-green-base font-semibold">
        Nossos Contatos
      </h3>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex gap-2  items-center ">
          <span className="w-16 h-16 bg-green-base rounded-md flex items-center justify-center">
            <Phone />
          </span>
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-semibold">Telefone</span>
            <span className="text-sm md:text-base">(99) 99140-2932</span>
          </div>
        </div>
        <div className="flex gap-2  items-center ">
          <span className="w-16 h-16 bg-green-base rounded-md flex items-center justify-center">
            <Mails />
          </span>
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-semibold">Email</span>
            <span className="text-sm md:text-base">
              embalagensbrasil1972@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <GoogleMapsComponent />
      </div>
    </div>
  );
};
