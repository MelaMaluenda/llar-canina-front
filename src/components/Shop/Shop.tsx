import { useTranslation } from "react-i18next";
import ShopStyled from "./ShopStyled";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const Shop = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <ShopStyled>
      <div className="icon">
        <ResponsiveImage
          className="card__icon"
          imgUrl={{
            small: "https://i.ibb.co/ZgKd6cJ/i-correa-320.webp",
            medium: "https://i.ibb.co/QryDKhZ/i-correa-480.webp",
            large: "https://i.ibb.co/W2TPXC6/i-correa-768.webp",
            xlarge: "https://i.ibb.co/vYn0F84/i-correa-1024.webp",
          }}
          alt="A dog collar icon"
        />
      </div>
      <article className="shop">
        <aside className="shop__container">
          <ResponsiveImage
            className="shop__container--image"
            imgUrl={{
              small: "https://i.ibb.co/mvrRJ3T/shop-320.webp",
              medium: "https://i.ibb.co/mvrRJ3T/shop-320.webp",
              large: "https://i.ibb.co/NWhtynX/shop-1024.webp",
              xlarge: "https://i.ibb.co/FgTnZFX/shop-1440.webp",
            }}
            alt="A dog collar icon"
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
