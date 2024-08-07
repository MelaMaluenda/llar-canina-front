import { useTranslation } from "react-i18next";
import UsStyled from "./UsStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Us = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <UsStyled>
      <article className="us">
        <ResponsiveImage
          className="us__presentation us__left"
          imgUrl={{
            small: "https://i.ibb.co/ZJCr1GX/elena-320.webp",
            medium: "https://i.ibb.co/CJ5nFWQ/elena-768.webp",
            large: "https://i.ibb.co/Fx7Gksq/elena-1440.webp",
          }}
          alt="Elena and a dog"
        />
      </article>
      <article className="info">
        <div className="info__title">
          <ResponsiveImage
            className="info__title--footprint"
            imgUrl={{
              small: "https://i.ibb.co/VmDmRdc/dog-footprint-320.webp",
              medium: "https://i.ibb.co/G0FCTpg/dog-footprint-480.webp",
              large: "https://i.ibb.co/G0FCTpg/dog-footprint-480.webp",
            }}
            alt="A dog footprint"
          />
          <h2 className="info__title--label"> {t("us.title")}</h2>
        </div>
        <div className="info__text">
          <p className="info__text--explanation"> {t("us.explanation1")}</p>
          <p className="info__text--explanation">{t("us.explanation2")}</p>
          <p className="info__text--explanation"> {t("us.explanation3")}</p>
        </div>
      </article>
      <article className="us">
        <ResponsiveImage
          className="us__presentation us__right"
          imgUrl={{
            small: "https://i.ibb.co/R2d4z4K/elena2-320.webp",
            medium: "https://i.ibb.co/6Nm5Z31/elena2-768.webp",
            large: "https://i.ibb.co/wLvSDF3/elena2-1440.webp",
          }}
          alt="Elena and a dog"
        />
      </article>
    </UsStyled>
  );
};

export default Us;
