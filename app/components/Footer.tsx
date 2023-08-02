import Image from "next/image";
import Icon from "/public/icon.png";

export const Footer = () => {
  const daysWeekAndSchedules = [
    { day: "Domingo", schedules: "08:00 - 12:00" },
    { day: "Segunda-feira", schedules: "08:00 - 18:00" },
    { day: "Terça-feira", schedules: "08:00 - 18:00" },
    { day: "Quarta-feira", schedules: "08:00 - 18:00" },
    { day: "Quinta-feira", schedules: "08:00 - 18:00" },
    { day: "Sexta-feira", schedules: "08:00 - 17:30" },
    { day: "Sábado", schedules: "Fechado" },
  ];
  return (
    <footer className="bg-green-base">
      <div className="max-w-[1200px] m-auto flex flex-col">
        <div className="flex justify-center md:justify-between items-center mt-10">
          <div className="hidden md:block">
            <Image src={Icon} width={250} height={250} alt="" />
          </div>
          <section>
            <h1 className="text-xl font-bold">Horário de funcionamento:</h1>
            {daysWeekAndSchedules.map((days) => (
              <div
                key={days.day}
                className="flex w-[300px] gap-6 text-base items-center justify-between"
              >
                <span className="font-semibold">{days.day}</span>
                <span>{days.schedules}</span>
              </div>
            ))}
          </section>
        </div>
        <span className="w-full h-[1px] bg-white/70 mt-10"></span>
        <div className="flex items-center justify-center md:justify-between text-xs my-2">
          <span>A embalagem que faz a diferença: Embala Brasil!</span>
          <span className="hidden md:block">
            Direitos reservados a Embalagens Brasil
          </span>
        </div>
      </div>
    </footer>
  );
};
