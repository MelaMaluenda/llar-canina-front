import { useTranslation } from "react-i18next";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <HeaderStyled className="head">
      <Navigation />
      <div className="head__titular">
        <h2 className="head__titular--1">{t("header.title1")}</h2>
        <h3 className="head__titular--2">{t("header.title2")}</h3>
      </div>
      <div className="head__banner" />
    </HeaderStyled>
  );
};

export default Header;
