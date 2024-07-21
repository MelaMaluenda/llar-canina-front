import { useTranslation } from "react-i18next";
import Services from "../../components/Services/Services";
import Us from "../../components/Us/Us";
import HomeStyled from "./HomeStyled";
import CarouselVisitors from "../../components/CarouselVisitors/CarouselVisitors";
import { CarouselVisitorsData } from "../../components/CarouselVisitors/CarouselVisitorsData";
import CarouselReviews from "../../components/CarouselReviews/CarouselReviews";
import CarouselReviewsData from "../../components/CarouselReviews/CarouselReviewsData";

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
      <CarouselVisitors items={CarouselVisitorsData} />
      <div className="title title--stars">
        <h2 className="title__label"> {t("reviews.title")} </h2>
        <img
          className="title__footprint--stars"
          src="/images/stars.png"
          alt="Five stars as a"
          width="360"
          height="59"
        />
      </div>
      <CarouselReviews reviews={CarouselReviewsData} />
      <h2 className="title__label"> {t("visitors.title")} </h2>
    </HomeStyled>
  );
};

export default HomePage;
