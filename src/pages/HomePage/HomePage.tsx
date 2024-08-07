import { useTranslation } from "react-i18next";
import Services from "../../components/Services/Services";
import Us from "../../components/Us/Us";
import HomeStyled from "./HomeStyled";
import CarouselVisitors from "../../components/CarouselVisitors/CarouselVisitors";
import { CarouselVisitorsData } from "../../components/CarouselVisitors/CarouselVisitorsData";
import CarouselReviews from "../../components/CarouselReviews/CarouselReviews";
import CarouselReviewsData from "../../components/CarouselReviews/CarouselReviewsData";
import Location from "../../components/Location /Location";
import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage";

const HomePage = (): React.ReactElement => {
  const { t } = useTranslation("translation");

  return (
    <HomeStyled>
      <div className="title">
        <ResponsiveImage
          className="title__footprint"
          imgUrl={{
            small: "https://i.ibb.co/VmDmRdc/dog-footprint-320.webp",
            medium: "https://i.ibb.co/G0FCTpg/dog-footprint-480.webp",
            large: "https://i.ibb.co/G0FCTpg/dog-footprint-480.webp",
          }}
          alt="A dog footprint"
        />
        <h2 className="title__label"> {t("services.title")} </h2>
      </div>
      <Services />
      <Us />
      <div className="title">
        <ResponsiveImage
          className="title__footprint"
          imgUrl={{
            small: "https://i.ibb.co/VmDmRdc/dog-footprint-320.webp",
            medium: "https://i.ibb.co/G0FCTpg/dog-footprint-480.webp",
            large: "https://i.ibb.co/G0FCTpg/dog-footprint-480.webp",
          }}
          alt="A dog footprint"
        />
        <h2 className="title__label"> {t("visitors.title")} </h2>
      </div>
      <CarouselVisitors items={CarouselVisitorsData} />
      <div className="title title--stars">
        <h2 className="title__label"> {t("reviews.title")} </h2>
        <ResponsiveImage
          className="title__footprint--stars"
          imgUrl={{
            small: "https://i.ibb.co/0BGjsD0/stars-320.webp",
            medium: "https://i.ibb.co/FxKNd3w/stars-480.webp",
            large: "https://i.ibb.co/FxKNd3w/stars-480.webp",
            xlarge: "https://i.ibb.co/t2tyKwH/stars-1024.webp",
          }}
          alt="Five stars as a"
        />
      </div>
      <CarouselReviews reviews={CarouselReviewsData} />
      <Location />
    </HomeStyled>
  );
};

export default HomePage;
