import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FooterStyled from "./FooterStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Footer = () => {
  const { t } = useTranslation("translation");

  return (
    <FooterStyled>
      <div className="footer">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <NavLink aria-label="services" to="/services">
              {t("navigation.services")}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink aria-label="rates" to="/rates">
              {t("navigation.rates")}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink aria-label="contact" to="/contact">
              {t("navigation.contact")}
            </NavLink>
          </li>
        </ul>
        <ul className="footer__author">
          <li>
            <a href="https://www.instagram.com/llarcanina" target="_blank">
              <ResponsiveImage
                className="footer__author--icons"
                imgUrl={{
                  small: "https://i.ibb.co/WtdG9cs/camara-320.webp",
                  medium: "https://i.ibb.co/WtdG9cs/camara-320.webp",
                  large: "https://i.ibb.co/rw0S9qN/camara-768.webp",
                }}
                alt="Instagram Llar Canina"
              />
            </a>
          </li>

          <li>
            <a href="mailto:info@llarcanina.cat">
              <ResponsiveImage
                className="footer__author--icons"
                imgUrl={{
                  small: "https://i.ibb.co/2tkhhq3/email2-320.webp",
                  medium: "https://i.ibb.co/2tkhhq3/email2-320.webp",
                  large: "https://i.ibb.co/2WbRZXq/email2-768.webp",
                }}
                alt="Enviar correo electrónico"
              />
            </a>
          </li>
          <li className="footer__author--title">Llar Canina 2024</li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
