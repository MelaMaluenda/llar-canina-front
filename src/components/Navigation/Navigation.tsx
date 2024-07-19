import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
  { code: "cat", lang: "CAT" },
  { code: "es", lang: "ES" },
];

const Navigation = (): React.ReactElement => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationStyled className="menu">
      <div className="menu__head logo">
        <div className="logo__container">
          <img
            className="logo__image"
            src="/images/logo.webp"
            alt="Logo with a dog"
            width="50"
            height="60"
          />
          <img
            className="logo__text"
            src="/images/letra-logo1.webp"
            alt="Llar canina. Més que un animal de companyia"
            width="200"
            height="50"
          />
        </div>
        <button className="menu__toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`menu__content ${isOpen ? "menu__content--open" : ""}`}>
        <ul className="menu__nav">
          <li className="menu__nav--us">
            <NavLink aria-label="us" to="">
              {t("navigation.us")}
            </NavLink>
          </li>
          <li className="menu__nav--services">
            <NavLink aria-label="services" to="">
              {t("navigation.services")}
            </NavLink>
          </li>
          <li className="menu__nav--rates">
            <NavLink aria-label="rates" to="">
              {t("navigation.rates")}
            </NavLink>
          </li>
        </ul>
        <div className="menu__languages languages">
          {languages.map((lng) => (
            <button
              key={lng.code}
              className="menu__languages--i"
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      </div>
    </NavigationStyled>
  );
};

export default Navigation;
