import React from "react";
import RequirementsStyled from "./RequirementsStyled";
import { useTranslation } from "react-i18next";

const Requirements: React.FC = () => {
  const { t } = useTranslation("translation");

  return (
    <RequirementsStyled>
      <h2 className="requirements__title">{t("requirements.title")}</h2>
      <div className="requirements__grid">
        <div className="card">
          <h3 className="card__title">{t("requirements.cardTitle3")}</h3>
          <p className="card__description">
            {t("requirements.cardDescription3")}
          </p>
        </div>
        <div className="card">
          <h3 className="card__title">{t("requirements.cardTitle2")}</h3>
          <p className="card__description">
            {t("requirements.cardDescription2")}
          </p>
        </div>
        <div className="card">
          <h3 className="card__title">{t("requirements.cardTitle1")}</h3>
          <p className="card__description">
            {t("requirements.cardDescription1")}
          </p>
        </div>
        <div className="card">
          <h3 className="card__title">{t("requirements.cardTitle4")}</h3>
          <p className="card__description">
            {t("requirements.cardDescription4")}
          </p>
        </div>
      </div>
    </RequirementsStyled>
  );
};

export default Requirements;
