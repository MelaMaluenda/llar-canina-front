import Carousel from "react-material-ui-carousel";
import { ReviewContainer, StyledReviewGroup } from "./CarouselReviewsStyled";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

type ReviewProps = {
  imgUrl: string;
  nameKey: string;
  textKey: string;
};

type CarouselReviewsProps = {
  reviews: ReviewProps[];
};

const CarouselReviews: React.FC<CarouselReviewsProps> = ({ reviews }) => {
  const isSmallScreen = useMediaQuery("(max-width: 624px)");

  const getChunks = useCallback(() => {
    if (isSmallScreen) {
      return chunkArray(reviews, 1);
    } else {
      return chunkArray(reviews, 2);
    }
  }, [reviews, isSmallScreen]);

  const [chunks, setChunks] = useState(getChunks());

  useEffect(() => {
    setChunks(getChunks());
  }, [getChunks]);

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={false}
      animation="fade"
      interval={10000}
      navButtonsProps={{
        style: {
          backgroundColor: "#D6D58E",
          color: "#fff",
          margin: "0 10px",
        },
      }}
      indicators={false}
    >
      {chunks.map((chunk, i) => (
        <ReviewGroup key={i} reviews={chunk} />
      ))}
    </Carousel>
  );
};

const ReviewGroup: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <StyledReviewGroup>
      {reviews.map((review, i) => (
        <Review key={i} review={review} />
      ))}
    </StyledReviewGroup>
  );
};

const Review: React.FC<{ review: ReviewProps }> = ({ review }) => {
  const { t } = useTranslation("translation");

  return (
    <ReviewContainer elevation={0}>
      <div className="review">
        <img src={review.imgUrl} alt={t(review.nameKey)} />
        <div className="container">
          <div className="name">{t(review.nameKey)}</div>
          <div className="text">{t(review.textKey)}</div>
        </div>
      </div>
    </ReviewContainer>
  );
};

function chunkArray(array: ReviewProps[], size: number): ReviewProps[][] {
  const result: ReviewProps[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default CarouselReviews;
