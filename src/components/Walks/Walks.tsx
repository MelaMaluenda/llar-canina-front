import { useTranslation } from "react-i18next";
import WalksStyled from "./WalksStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Walks = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <WalksStyled>
      <div className="icon">
        <ResponsiveImage
          className="icon__image"
          imgUrl={{
            small: "https://i.ibb.co/7YHhSvy/i-paseo-320.webp",
            medium: "https://i.ibb.co/NZtnhwb/i-paseo-480.webp",
            large: "https://i.ibb.co/BPXbMwV/i-paseo-768.webp",
            xlarge: "https://i.ibb.co/6BMWW1w/i-paseo-1024.webp",
          }}
          alt="A man walking with his dog"
        />
      </div>
      <article className="walks">
        <aside className="walks__container">
          <ResponsiveImage
            className="walks__container--image"
            imgUrl={{
              small: "https://i.ibb.co/G9MP1Jq/parque-320.webp",
              medium: "https://i.ibb.co/26Nzp56/parque-1024.webp",
              large: "https://i.ibb.co/26Nzp56/parque-1024.webp",
              xlarge: "https://i.ibb.co/y8HWjBP/parque-1440.webp",
            }}
            alt="Two dogs in the parc"
          />
        </aside>
        <aside className="walks__explanation">
          <h2 className="walks__explanation--title">{t("walks.title")}</h2>
          <p className="walks__explanation--p">{t("walks.p1")}</p>
          <p className="walks__explanation--p">{t("walks.p2")}</p>
        </aside>
      </article>
    </WalksStyled>
  );
};

export default Walks;
