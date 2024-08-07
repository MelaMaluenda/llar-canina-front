import { useTranslation } from "react-i18next";
import LocationStyled from "./LocationStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Location = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <LocationStyled>
      <article className="information">
        <div className="title">
          <ResponsiveImage
            className="title__footprint"
            imgUrl={{
              small: "https://i.ibb.co/CB0MPDs/white-dog-footprint-320.webp",
              medium: "https://i.ibb.co/99DvyMc/white-dog-footprint-480.webp",
              large: "https://i.ibb.co/99DvyMc/white-dog-footprint-480.webp",
            }}
            alt="A dog footprint"
          />
          <h2 className="title__label--white"> {t("location.title")} </h2>
        </div>
        <div className="data">
          <ul>
            <li className="data__info">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=41.40842128780011,2.1450648695123555"
                target="_blank"
                rel="noopener noreferrer"
                className="data__info--link"
              >
                <ResponsiveImage
                  className="data__info--icon"
                  imgUrl={{
                    small: "https://i.ibb.co/Lz7yhS4/gps-320.webp",
                    medium: "https://i.ibb.co/Lz7yhS4/gps-320.webp",
                    large: "https://i.ibb.co/yFhKzjV/gps-1024.webp",
                  }}
                  alt="GPS icon"
                />
                <span className="data__info--text">{t("location.gps")}</span>
              </a>
            </li>
            <li className="data__info data__time">
              <ResponsiveImage
                className="data__info--icon data__time--icon"
                imgUrl={{
                  small: "https://i.ibb.co/37CvR5P/clock-320.webp",
                  medium: "https://i.ibb.co/37CvR5P/clock-320.webp",
                  large: "https://i.ibb.co/VDtXkqY/clock-1024.webp",
                }}
                alt="Clock icon"
              />
              <div className="data__info--text data__time--text">
                <span className="data__text">{t("location.clock1")}</span>
                <span className="data__text">{t("location.clock2")}</span>
              </div>
            </li>
            <li className="data__info">
              <a href="mailto:info@llarcanina.cat" className="data__info--link">
                <ResponsiveImage
                  className="data__info--icon"
                  imgUrl={{
                    small: "https://i.ibb.co/tsxXf07/email-320.webp",
                    medium: "https://i.ibb.co/tsxXf07/email-320.webp",
                    large: "https://i.ibb.co/DWtyvxR/email-1024.webp",
                  }}
                  alt="Email icon"
                />
                <span className="data__info--text">{t("location.email")}</span>
              </a>
            </li>
            <li className="data__info">
              <a href="tel:+1234567890" className="data__info--link">
                <ResponsiveImage
                  className="data__info--icon"
                  imgUrl={{
                    small: "https://i.ibb.co/vkmvt16/phone-320.webp",
                    medium: "https://i.ibb.co/vkmvt16/phone-320.webp",
                    large: "https://i.ibb.co/4T6zmf4/phone-1024.webp",
                  }}
                  alt="Phone icon"
                />
                <span className="data__info--text">{t("location.phone")}</span>
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article className="gps">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=41.40842128780011,2.1450648695123555"
          target="_blank"
          rel="noopener noreferrer"
          className="gps__link"
        >
          <ResponsiveImage
            className="gps__map"
            imgUrl={{
              small: "https://i.ibb.co/23cjbpc/map-320.webp",
              medium: "https://i.ibb.co/KFBj0vP/map-480.webp",
              large: "https://i.ibb.co/GTKYgmx/map-1024.webp",
              xlarge: "https://i.ibb.co/y5HB1wH/map-1440.webp",
            }}
            alt="Map"
          />
        </a>
      </article>
    </LocationStyled>
  );
};

export default Location;
