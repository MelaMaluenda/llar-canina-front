import { useTranslation } from "react-i18next";
import TermsAndConditionsStyled from "./TermsAndConditionsStyled";

const TermsAndConditions: React.FC = () => {
  const { t } = useTranslation("translation");

  return (
    <TermsAndConditionsStyled>
      <h1 className="terms__title">{t("terms.title")}</h1>
      <p className="terms__intro">{t("terms.description")}</p>
      <section className="terms__section">
        <h2 className="terms__section-title">{t("terms.section1title")}</h2>
        <p className="terms__section-content">{t("terms.section1content")}</p>
      </section>
      <section className="terms__section">
        <h2 className="terms__section-title">{t("terms.section2title")}</h2>
        <p className="terms__section-content">{t("terms.section2content")}</p>
      </section>
      <section className="terms__section">
        <h2 className="terms__section-title">{t("terms.section3title")}</h2>
        <p className="terms__section-content">{t("terms.section3content")}</p>
      </section>
      <section className="terms__section">
        <h2 className="terms__section-title">{t("terms.section4title")}</h2>
        <p className="terms__section-content">{t("terms.section4content")}</p>
      </section>
      <section className="terms__section">
        <h2 className="terms__section-title">{t("terms.section5title")}</h2>
        <p className="terms__section-content">{t("terms.section5content")}</p>
      </section>
      <section className="terms__section">
        <h2 className="terms__section-title">{t("terms.section6title")}</h2>
        <p className="terms__section-content">{t("terms.section6content")}</p>
      </section>

      <p className="terms__date">{t("terms.date")}</p>
    </TermsAndConditionsStyled>
  );
};

export default TermsAndConditions;
