import { NextPage } from "next";
import Head from "next/head";
import UpButton from "../components/button/UpButton";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Impressum: NextPage = () => {
  return (
    <>
      <Head>
        <title>Impressum - Augsburger Stadtwichtel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/rainbow.png" />
        <meta
          name="description"
          content={`Impressum für die Augsburger Stadtwichtel`}
        />
        <meta
          property="og:title"
          content={`Impressum - Augsburger Stadtwichtel`}
        />
        <meta
          property="og:description"
          content={`Impressum für die Augsburger Stadtwichtel`}
        />
        <meta property="og:url" content={`https://stadtwichtel-augsburg.de`} />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Header />
      <div className="px-4 pb-24 mx-auto bt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-xl font-semibold font-accent">Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p className="pb-4">
          Stadtwichtel Augsburg
          <br />
          Volkhartstra&szlig;e 2<br />
          86152 Augsburg
        </p>

        <p className="pb-4">
          <strong>Vertreten durch:</strong>
          <br />
          Evi F&auml;lschle
          <br />
          Stephanie Rauscher
        </p>

        <h2>Kontakt</h2>
        <p className="pb-4">
          Telefon: 015782993190 / 01792687589
          <br />
          E-Mail: augsburger.stadtwichtel@gmail.com
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p className="pb-4">
          Evi F&auml;lschle
          <br />
          Stephanie Rauscher
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p className="pb-4">
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
      <Footer />
      <UpButton />
    </>
  );
};
export default Impressum;
