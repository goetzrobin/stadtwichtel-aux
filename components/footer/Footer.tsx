import React from "react";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <div className="flex items-end justify-between m-8">
      <div>
        <div className="h-full w-52">
          <Logo />
        </div>
        <div className="mx-2 mt-2 mb-6 text-sm">
          <p>Volkhartstraße 2</p>
          <p>86152 Augsburg </p>
          <p>015782993190 / 01792687589</p>
          <p>
            <a
              className="hover:underline"
              href="mailto:augsburger.stadtwichtel@gmail.com"
            >
              augsburger.stadtwichtel@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="text-stone-800 text-md">
        <p>&copy; {new Date().getFullYear()} Augsburger Stadtwichtel</p>
      </div>
    </div>
  );
}

export default Footer;
