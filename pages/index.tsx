import type { NextPage } from "next";
import Head from "next/head";
import { Element, animateScroll } from "react-scroll";

import Intro from "../components/intro/Intro";
import Header, { HeaderLinks } from "../components/header/Header";
import Info from "../components/info/Info";
import AboutUs from "../components/about-us/AboutUs";
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";
import UpButton from "../components/button/UpButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <html lang="de" />
        <title>Augsburger Stadtwichtel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/rainbow.png" />
        <meta
          name="description"
          content={`Liebevolle, individuelle und professionelle Kinderbetreuung. Für maximal 8 Kinder von 2 Jahren bis zum Schuleintritt.`}
        />
        <meta property="og:title" content={`Augsburger Stadtwichtel`} />
        <meta
          property="og:description"
          content={`Liebevolle, individuelle und professionelle Kinderbetreuung. Für maximal 8 Kinder von 2 Jahren bis zum Schuleintritt.`}
        />
        <meta property="og:url" content={`https://stadtwichtel-augsburg.de`} />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Element name={HeaderLinks.home.path}>
        <Intro />
      </Element>
      <Element name={HeaderLinks.informationen.path}>
        <Info />
      </Element>
      <Element name={HeaderLinks.ueberUns.path}>
        <AboutUs />
      </Element>
      <Element name={HeaderLinks.anmeldung.path}>
        <Form />
      </Element>
      <Footer />
      <UpButton />
    </>
  );
};

export default Home;
