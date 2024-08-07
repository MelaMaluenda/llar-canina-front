import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WorkStyled from "./WorkStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Work = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <WorkStyled>
      <div className="icon">
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
      </div>
      <article className="work">
        <aside className="work__explanation">
          <h2 className="work__explanation--title">
            {t("work.section1-title1")}
          </h2>
          <p className="work__explanation--p">{t("work.section1-p1")}</p>
          <p className="work__explanation--p">{t("work.section1-p2")}</p>
          <p className="work__explanation--p">{t("work.section1-p3")}</p>
          <p className="work__explanation--p">{t("work.section1-p4")}</p>
        </aside>
        <aside className="work__highlight">
          <div className="features">
            <div className="features__box">{t("work.section2-highlight1")}</div>
            <div className="features__box">{t("work.section2-highlight2")}</div>
            <div className="features__box">{t("work.section2-highlight3")}</div>
            <div className="features__box">{t("work.section2-highlight4")}</div>
          </div>
        </aside>
      </article>
      <div className="rates">
        <NavLink aria-label="rates" className="rates__button" to="/rates">
          {t("navigation.rates")}
        </NavLink>
      </div>
    </WorkStyled>
  );
};

export default Work;
