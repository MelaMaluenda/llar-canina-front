import { useTranslation } from "react-i18next";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <HeaderStyled className="head">
      <Navigation />
      <h2 className="head_titular">{t("header.title")}</h2>
      <div className="head__banner" />
    </HeaderStyled>
  );
};

export default Header;
