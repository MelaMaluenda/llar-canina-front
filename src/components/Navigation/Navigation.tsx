import NavigationStyled from "./NavigationStyled";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
  { code: "cat", lang: "CAT" },
  { code: "es", lang: "ESP" },
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavigationStyled className="menu">
      <div className="menu__head logo">
        <Link aria-label="home" to="/home">
          <div className="logo__container">
            <img
              className="logo__image"
              src="https://i.ibb.co/b327WqR/logo-320.webp"
              srcSet="
              https://i.ibb.co/b327WqR/logo-320.webp 320w,
              https://i.ibb.co/9tCjB02/logo-480.webp 480w,
              "
              sizes="(max-width: 480px) 320px, 480px"
              alt="Logo with a dog"
              loading="lazy"
            />
            <img
              className="logo__text"
              src="https://i.ibb.co/GH43PKM/letra-logo-480.webp"
              srcSet="
              https://i.ibb.co/GH43PKM/letra-logo-480.webp 768w,
              https://i.ibb.co/GdpZg85/letra-logo-1024.webp 1024w,
              "
              sizes="(max-width: 768px) 100vw, 1024px"
              alt="Llar canina. Més que un animal de companyia"
              loading="lazy"
            />
          </div>
        </Link>
        <button className="menu__toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`menu__content ${isOpen ? "menu__content--open" : ""}`}>
        <ul className="menu__nav">
          <li className="menu__nav--services">
            <NavLink aria-label="services" to="/services" onClick={closeMenu}>
              {t("navigation.services")}
            </NavLink>
          </li>
          <li className="menu__nav--rates">
            <NavLink aria-label="rates" to="/rates" onClick={closeMenu}>
              {t("navigation.rates")}
            </NavLink>
          </li>
          <li className="menu__nav--contact">
            <NavLink aria-label="contact" to="/contact" onClick={closeMenu}>
              {t("navigation.contact")}
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
              {lng.code === "cat" ? t("navigation.cat") : t("navigation.es")}
            </button>
          ))}
        </div>
      </div>
    </NavigationStyled>
  );
};

export default Navigation;
