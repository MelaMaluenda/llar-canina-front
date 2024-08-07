import { useEffect, useState } from "react";
import { load, save, remove } from "react-cookies";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CookiesStyled from "./CookiesStyled";

const Cookies: React.FC = () => {
  const { t } = useTranslation("translation");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isAccepted = load("cookiesAccepted");
    if (isAccepted) {
      setIsVisible(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    save("cookiesAccepted", true, { path: "/", maxAge: 3600 * 24 * 365 });
    setIsVisible(false);
  };

  const handleRejectCookies = () => {
    remove("cookiesAccepted", { path: "/" });
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <CookiesStyled>
          <div className="cookies__overlay">
            <div className="cookies__popup">
              <h2 className="cookies__title">{t("cookies.title")}</h2>
              <img
                className="cookies__image"
                src="/images/lyra.webp"
                alt="A dog in a parc"
                width="276"
                height="368"
              />
              <div className="cookies__message">
                <p className="cookies__message--text">
                  {t("cookies.message1")}
                </p>
                <p className="cookies__message--text">
                  {t("cookies.message2")}
                </p>
                <p className="cookies__message--text">
                  {t("cookies.message3")}
                  <Link
                    className="cookies__link"
                    aria-label="cookies"
                    to="/cookies"
                    target="_blank"
                  >
                    <span> {t("cookies.span")}</span>
                  </Link>
                </p>
              </div>
              <div className="cookies__buttons">
                <button
                  className="cookies__buttons--accept"
                  onClick={handleAcceptCookies}
                >
                  {t("cookies.accept")}
                </button>
                <button
                  className="cookies__buttons--reject"
                  onClick={handleRejectCookies}
                >
                  {t("cookies.reject")}
                </button>
              </div>
            </div>
          </div>
        </CookiesStyled>
      )}
    </>
  );
};

export default Cookies;
