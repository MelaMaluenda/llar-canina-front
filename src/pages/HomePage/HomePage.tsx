import { useTranslation } from "react-i18next";
import Services from "../../components/Services/Services";
import Us from "../../components/Us/Us";
import HomeStyled from "./HomeStyled";
import Visitors from "../../components/Visitors/Visitors";

const HomePage = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <HomeStyled>
      <div className="title">
        <img
          className="title__footprint"
          src="/images/dog-footprint.webp"
          alt="A dog footprint"
          width="54"
          height="47"
        />
        <h2 className="title__label"> {t("services.title")} </h2>
      </div>
      <Services />
      <Us />
      <div className="title">
        <img
          className="title__footprint"
          src="/images/dog-footprint.webp"
          alt="A dog footprint"
          width="54"
          height="47"
        />
        <h2 className="title__label"> {t("visitors.title")} </h2>
      </div>
      <Visitors />
    </HomeStyled>
  );
};

export default HomePage;
