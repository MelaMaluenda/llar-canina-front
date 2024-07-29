import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FooterStyled from "./FooterStyled";

const Footer = () => {
  const { t } = useTranslation("translation");

  return (
    <FooterStyled>
      <div className="footer">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <NavLink aria-label="services" to="">
              {t("navigation.services")}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink aria-label="rates" to="">
              {t("navigation.rates")}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink aria-label="contact" to="">
              {t("navigation.contact")}
            </NavLink>
          </li>
        </ul>
        <ul className="footer__author">
          <li className="footer__author--title">&copy; Llar Canina 2024</li>
          <li>
            <a href="https://www.instagram.com/llarcanina" target="_blank">
              <img
                src="images/camara.png"
                alt="Instagram Llar Canina"
                className="footer__author--icons"
                width={35}
                height={35}
              />
            </a>
          </li>
          <li>
            <a href="mailto:info@llarcanina.cat">
              <img
                src="images/email2.png"
                alt="Enviar correo electrónico"
                className="footer__author--icons"
                width={40}
                height={35}
              />
            </a>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
