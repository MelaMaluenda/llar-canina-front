import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "cat", lang: "CAT" },
  { code: "es", lang: "ES" },
];

const Navigation = (): React.ReactElement => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavigationStyled className="menu">
      <div className="menu__head logo">
        <img
          className="logo__image"
          src="/images/logo.webp"
          alt="Logo with a dog"
          width="150"
          height="160"
        />
        <img
          className="logo__text"
          src="/images/letra-logo1.webp"
          alt="Llar canina. Més que un animal de companyia"
          width="300"
          height="75"
        />
      </div>
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
    </NavigationStyled>
  );
};

export default Navigation;
