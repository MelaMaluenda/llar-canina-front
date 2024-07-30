import { useTranslation } from "react-i18next";
import ShopStyled from "./ShopStyled";

const Shop = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <ShopStyled>
      <div className="icon">
        <img
          className="icon__image"
          src="/images/icon-shop.webp"
          alt="A dog collar icon"
          width="329"
          height="290"
        />
      </div>
      <article className="shop">
        <aside className="shop__container">
          <img
            className="shop__container--image"
            src="/images/shop.jpeg"
            alt="A dog collar icon"
            width="224"
            height="332"
          />
        </aside>
        <aside className="shop__explanation">
          <h2 className="shop__explanation--title">{t("shop.title1")}</h2>
          <p className="shop__explanation--p">{t("shop.section1-p1")}</p>
          <p className="shop__explanation--p">{t("shop.section1-p2")}</p>
          <h2 className="shop__explanation--title">{t("shop.title2")}</h2>
          <p className="shop__explanation--p">{t("shop.section2-p")}</p>
        </aside>
      </article>
    </ShopStyled>
  );
};

export default Shop;
