import Image from "next/image";
import React from "react";
import freunde from "../../public/freunde.png";

function Intro() {
  return (
    <div className="flex flex-col px-4 py-24 mx-auto sm:flex-row sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <section className="px-4 sm:px-12 sm:w-4/6">
        <h1 className="text-4xl font-bold text-stone-800 sm:text-5xl font-brown font-accent">
          Augsburger Stadtwichtel
        </h1>
        <p className="pt-4 text-lg">
          Liebevolle, individuelle und professionelle Kinderbetreuung.
          <br />
          Für maximal 8 Kinder von 2 Jahren bis zum Schuleintritt.
        </p>
      </section>
      <section className="relative sm:w-1/2 sm:pb-[500px]">
        <div className="m-4 -z-10 sm:m-0 sm:absolute sm:-left-48">
          <Image
            alt="Unsere kleinen Stadtwichtel. Von Grund auf verschieden aber zusammen am besten."
            src={freunde}
            placeholder="blur"
            objectFit="cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Intro;
