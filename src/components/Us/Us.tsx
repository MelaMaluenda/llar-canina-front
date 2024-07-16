import { useTranslation } from "react-i18next";
import UsStyled from "./UsStyled";

const Us = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <UsStyled>
      <article className="us">
        <img
          className="us__presentation us__left"
          src="/images/elena.jpeg"
          alt="Elena and a dog"
          width="378"
          height="504"
        />
      </article>
      <article className="info">
        <div className="info__title">
          <img
            className="info__title--footprint"
            src="/images/dog-footprint.webp"
            alt="A dog footprint"
            width="54"
            height="47"
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
        <img
          className="us__presentation us__right"
          src="/images/elena3.jpeg"
          alt="Elena and a dog"
          width="378"
          height="504"
        />
      </article>
    </UsStyled>
  );
};

export default Us;
