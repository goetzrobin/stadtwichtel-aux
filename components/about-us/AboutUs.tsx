import Image from "next/image";
import React from "react";

import hase from "../../public/hase.png";
import fuchs from "../../public/fuchs.png";

function AboutUs() {
  return (
    <div className="bg-bg">
      <div className="px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-accent font-accent sm:text-4xl">
          Über Uns
        </h2>
        <div className="flex flex-col my-12 sm:flex-row">
          <div className="flex items-center justify-center sm:w-5/12">
            <div className="w-full max-w-xs">
              <Image
                className="rounded-lg"
                alt="Unsere Freundin die schlaue Füchsin."
                src={fuchs}
                placeholder="blur"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="p-4 sm:w-7/12">
            <h3 className="my-5 text-2xl font-accent text-accent">
              Evi Fälschle
            </h3>
            <p className="text-stone-800">
              Ich wurde 1996 in Augsburg geboren. Nach meiner Ausbildung zur
              Kinderpflegerin studierte ich Kindheitspädagogik in Eichstätt und
              konnte mehrere Jahre Arbeitserfahrung in der Kinderkrippe sammeln.
              Durch die Arbeit als Gruppenleitung im Kindergarten lernte ich
              Stephanie kennen. Im Oktober 2021 begannen wir dann gemeinsam die
              Qualifikation zur Tagesmutter. Ich arbeite besonders gerne
              partizipativ, wobei mir das individuelle Eingehen auf jedes Kind
              sehr am Herzen liegt. Die kreative und bewegungsfördernde
              Alltagsgestaltung bereitet mir am meisten Freude. Ich freue mich
              darauf mit den Kindern jeden Tag neue Dinge zu erforschen, zu
              entdecken und diese auf ihrem Weg zu selbstsicheren und
              selbstständigen Persönlichkeiten begleiten und unterstützen zu
              können. Durch die kleine Gruppengröße findet ein familiärer Umgang
              statt, wodurch ein ständiger Austausch mit den Familien mit
              Mittelpunkt steht.
            </p>
          </div>
        </div>

        <div className="flex flex-col my-12 sm:flex-row">
          <div className="flex items-center justify-center sm:w-5/12">
            <div className="w-full max-w-xs">
              <Image
                className="rounded-lg"
                alt="Unsere Freundin die flinke Häsin."
                src={hase}
                placeholder="blur"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="p-4 sm:w-7/12">
            <h3 className="my-5 text-2xl font-accent text-accent">
              Stephanie Rauscher
            </h3>
            <p className="text-stone-800">
              Ich wurde 1994 in Augsburg geboren. Nachdem ich 2011 meine
              Kinderpflegeausbildung abgeschlossen habe, sammelte ich die
              verschiedensten Erfahrungen in der Kinderbetreuung. Ich erhielt
              Einblicke in den Bereich der Kinderkrippe, des Kindergartens, der
              Hortbetreuung ebenso wie in die Arbeit mit schwerbehinderten und
              schwererziehbaren Kindern. Mir liegt vor allem das kreative
              Arbeiten sowie die musikalische Früherziehung der Kinder am
              Herzen. Ich freue mich darauf Sie und Ihr Kind kennenzulernen und
              dieses gemeinsam nach individuellen Interessen zu begleiten und zu
              fördern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
