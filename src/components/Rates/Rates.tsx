import { useTranslation } from "react-i18next";
import RatesStyled from "./RatesStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Rates: React.FC = () => {
  const { t } = useTranslation("translation");

  return (
    <RatesStyled>
      <h2 className="rates__title">{t("rates.title")}</h2>
      <p className="rates__description">{t("rates.description")}</p>
      <div className="rates">
        <article className="rates__box">
          <h3 className="rates__box--title">{t("rates.hourPriceTitle")}</h3>
          <div className="content">
            <p className="content__description">
              {t("rates.hourPriceDescription")}
            </p>
            <ResponsiveImage
              className="content__image"
              imgUrl={{
                small: "https://i.ibb.co/9gQKc4h/lyra-320.webp",
                medium: "https://i.ibb.co/jvNCfQ3/lyra-1024.webp",
                large: "https://i.ibb.co/jvNCfQ3/lyra-1024.webp",
                xlarge: "https://i.ibb.co/thtGjJ7/lyra-1440.webp",
              }}
              alt="White dog"
            />
          </div>
        </article>
        <article className="rates__box">
          <h3 className="rates__box--title">{t("rates.bonusPriceTitle")}</h3>
          <div className="content">
            <p className="content__description">
              {t("rates.bonusPriceDescription")}
            </p>
            <ResponsiveImage
              className="content__image"
              imgUrl={{
                small: "https://i.ibb.co/68kwGbg/rumbo-320.webp",
                medium: "https://i.ibb.co/PmGryKX/rumbo-1024.webp",
                large: "https://i.ibb.co/PmGryKX/rumbo-1024.webp",
                xlarge: "https://i.ibb.co/3fS4fxq/rumbo-1440.webp",
              }}
              alt="Black dog"
            />
          </div>
        </article>
        <article className="rates__box--bonus">
          <div className="bonus">
            <h4 className="bonus__title">{t("rates.bonus50Title")}</h4>
            <p className="bonus__description">
              {t("rates.bonus50Description")}
            </p>
          </div>
          <div className="bonus">
            <h4 className="bonus__title">{t("rates.bonus100Title")}</h4>
            <p className="bonus__description">
              {t("rates.bonus100Description")}
            </p>
          </div>
          <div className="bonus">
            <h4 className="bonus__title">{t("rates.bonus200Title")}</h4>
            <p className="bonus__description">
              {t("rates.bonus200Description")}
            </p>
          </div>
        </article>
        <article className="rates__box--deadlines deadlines">
          <h5 className="deadlines__title">{t("rates.deadlinesTitle")}</h5>
          <p className="deadlines__description">
            {t("rates.deadlinesDescription")}
          </p>
          <div className="deadlines__conditions">
            <span className="deadlines__conditions--p">
              {t("rates.deadlinesP1")}
            </span>
            <span className="deadlines__conditions--p">
              {t("rates.deadlinesP2")}
            </span>
            <span className="deadlines__conditions--p">
              {t("rates.deadlinesP3")}
            </span>
          </div>
          <p className="deadlines__final">{t("rates.finalDescription")}</p>
        </article>
      </div>
    </RatesStyled>
  );
};

export default Rates;
