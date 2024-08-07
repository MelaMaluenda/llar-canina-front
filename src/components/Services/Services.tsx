import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import ServicesStyled from "./ServicesStyled";
import { useTranslation } from "react-i18next";

const Services = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <ServicesStyled>
      <article className="card">
        <ResponsiveImage
          className="card__icon"
          imgUrl={{
            small: "https://i.ibb.co/K25LrYg/i-alojamiento-320.webp",
            medium: "https://i.ibb.co/t44g2WQ/i-alojamiento-480.webp",
            large: "https://i.ibb.co/MpTkWjy/i-alojamiento-768.webp",
            xlarge: "https://i.ibb.co/v3KdLY2/i-alojamiento-1024.webp",
          }}
          alt="A house icon"
        />
        <h2 className="card__title">{t("services.translation")}</h2>
        <p className="card__text">{t("services.textHome")}</p>
      </article>
      <article className="card">
        <ResponsiveImage
          className="card__icon"
          imgUrl={{
            small: "https://i.ibb.co/ZgKd6cJ/i-correa-320.webp",
            medium: "https://i.ibb.co/QryDKhZ/i-correa-480.webp",
            large: "https://i.ibb.co/W2TPXC6/i-correa-768.webp",
            xlarge: "https://i.ibb.co/vYn0F84/i-correa-1024.webp",
          }}
          alt="A dog collar icon"
        />
        <h2 className="card__title">{t("services.shop")}</h2>
        <p className="card__text">{t("services.textShop")}</p>
      </article>
    </ServicesStyled>
  );
};

export default Services;
