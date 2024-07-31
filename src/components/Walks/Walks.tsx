import { useTranslation } from "react-i18next";
import WalksStyled from "./WalksStyled";

const Walks = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <WalksStyled>
      <div className="icon">
        <img
          className="icon__image"
          src="/images/icon-shop.webp"
          alt="A dog collar icon"
          width="329"
          height="290"
        />
      </div>
      <article className="walks">
        <aside className="walks__container">
          <img
            className="walks__container--image"
            src="/images/parque.png"
            alt="Two dogs in the parc"
            width="684"
            height="864"
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
