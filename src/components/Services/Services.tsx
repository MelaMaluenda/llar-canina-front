import ServicesStyled from "./ServicesStyled";
import { useTranslation } from "react-i18next";

const Services = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <ServicesStyled>
      <article className="card">
        <img
          className="card__icon"
          src="/images/icon-house2.webp"
          alt="A house icon"
          width="329"
          height="290"
        />
        <h2 className="card__title">{t("services.translation")}</h2>
        <p className="card__text">{t("services.textHome")}</p>
      </article>
      <article className="card">
        <img
          className="card__icon"
          src="/images/icon-shop.webp"
          alt="A dog collar icon"
          width="329"
          height="290"
        />
        <h2 className="card__title">{t("services.shop")}</h2>
        <p className="card__text">{t("services.textShop")}</p>
      </article>
    </ServicesStyled>
  );
};

export default Services;
