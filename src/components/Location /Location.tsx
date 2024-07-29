import { useTranslation } from "react-i18next";
import LocationStyled from "./LocationStyled";

const Location = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <LocationStyled>
      <article className="information">
        <div className="title">
          <img
            className="title__footprint"
            src="/images/white-dog-footprint.png"
            alt="A dog footprint"
            width="54"
            height="47"
          />
          <h2 className="title__label"> {t("location.title")} </h2>
        </div>
        <div className="data">
          <ul>
            <li className="data__info">
              <img
                className="data__info--icon"
                src="/images/gps.png"
                alt="GPS icon"
                width="60"
                height="60"
              />
              <span className="data__info--text">{t("location.gps")}</span>
            </li>
            <li className="data__info data__time">
              <img
                className="data__info--icon data__time--icon"
                src="/images/clock.png"
                alt="Clock icon"
                width="60"
                height="60"
              />
              <div className="data__info--text data__time--text">
                <span className="data__text">{t("location.clock1")}</span>
                <span className="data__text">{t("location.clock2")}</span>
              </div>
            </li>
            <li className="data__info">
              <img
                className="data__info--icon"
                src="/images/email.png"
                alt="Email icon"
                width="60"
                height="60"
              />
              <span className="data__info--text">{t("location.email")}</span>
            </li>
            <li className="data__info">
              <img
                className="data__info--icon"
                src="/images/phone.png"
                alt="Phone icon"
                width="60"
                height="60"
              />
              <span className="data__info--text">{t("location.phone")}</span>
            </li>
          </ul>
        </div>
      </article>
      <article className="gps">
        <img
          className="gps__map"
          src="/images/randommap.png"
          alt="Map"
          width="949"
          height="439"
        />
      </article>
    </LocationStyled>
  );
};

export default Location;
