import React from "react";
import Logo from "../logo/Logo";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const HeaderLinks = {
  home: { label: "Home", path: "home" },
  informationen: { label: "Allgemeine Informationen", path: "informationen" },
  ueberUns: { label: "Über Uns", path: "über-uns" },
  anmeldung: { label: "Anmeldung", path: "anmeldung" },
};
function Header() {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <Logo className="mx-auto my-4 sm:mx-0 w-44" />
      <ul className="flex flex-wrap">
        {Object.values(HeaderLinks).map((link, index) => (
          <li
            key={index}
            className="px-3 py-2 mx-3 text-sm font-medium rounded-md cursor-pointer text-accent-600 hover:bg-bg-400"
          >
            <ScrollLink
              activeClass="active"
              to={link.path}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
