import Image from "next/image";
import React from "react";
import baer from "../../public/bear.png";
import hase from "../../public/hase.png";
import fuchs from "../../public/fuchs.png";
import elefant from "../../public/elefant.png";

function Info() {
  return (
    <div className="bg-accent">
      <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-astra-500 font-accent sm:text-4xl">
            Informationen zur Kindertagespflege
          </h2>

          <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8">
            <div className="">
              <dt className="font-medium text-astra-500">Betreuungszeiten</dt>
              <dd className="mt-2 text-bg-200">
                Montag – Donnerstag: 07:00 – 15:00 Uhr
                <br />
                Freitag: 07:00 – 14:00 Uhr
              </dd>
            </div>

            <div className="pt-4 border-t border-bg">
              <dt className="font-medium text-astra-500">Kontakt</dt>
              <dd className="mt-2 text-bg-200">
                <p>Volkhartstraße 2, 86152 Augsburg </p>
                <p>
                  E-Mail:
                  <a
                    className="ml-2 font-bold"
                    href="mailto:augsburger.stadtwichtel@gmail.com"
                  >
                    augsburger.stadtwichtel@gmail.com
                  </a>
                </p>
                <p>Telefon: 015782993190 / 01792687589</p>
                <p>
                  Instagram:
                  <a
                    className="ml-2 font-bold"
                    href="https://www.instagram.com/stadtwichtel_aux/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @standtwichtel_aux
                  </a>
                </p>
              </dd>
            </div>

            <div className="pt-4 border-t border-bg">
              <dt className="font-medium text-astra-500">Kooperation</dt>
              <dd className="mt-2 text-bg-200">
                <p>
                  Wir arbeiten in Kooperation mit der Fachberatung von agita –
                  Agentur für Kindertagespflege des Augsburger
                  Kinderschutzbundes e. V.
                </p>
                <p className="mt-2">
                  Nach der Vergabe eines Platzes wird ein entsprechender
                  Betreuungsvertag abgeschlossen. Familien mit geringem
                  Einkommen können die Übernahme der Beiträge beim Jugendamt
                  beantragen.
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            className="rounded-lg"
            alt="Unser Freund der große Bär."
            src={baer}
            placeholder="blur"
            objectFit="cover"
          />
          <Image
            className="rounded-lg"
            alt="Unsere Freundin die flinke Häsin."
            src={hase}
            placeholder="blur"
            objectFit="cover"
          />
          <Image
            className="rounded-lg"
            alt="Unsere Freundin die schlaue Füchsin."
            src={fuchs}
            placeholder="blur"
            objectFit="cover"
          />
          <Image
            className="rounded-lg"
            alt="Unser Freund der starke Elefant."
            src={elefant}
            placeholder="blur"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
