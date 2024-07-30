import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  CarouselVisitorsStyled,
  StyledItemGroup,
} from "./CarouselVisitorsStyled";
import { useMediaQuery } from "@mui/material";

type ItemProps = {
  imgUrl: string;
};

type CarouselComponentProps = {
  items: ItemProps[];
};

const CarouselVisitors: React.FC<CarouselComponentProps> = ({ items }) => {
  const isSmallScreen = useMediaQuery("(max-width: 480px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(max-width: 1024px)");
  const isXLargeScreen = useMediaQuery("(min-width: 1025px)");

  const getChunks = useCallback(() => {
    if (isSmallScreen) {
      return chunkArray(items, 1);
    } else if (isMediumScreen) {
      return chunkArray(items, 2);
    } else if (isLargeScreen) {
      return chunkArray(items, 3);
    } else if (isXLargeScreen) {
      return chunkArray(items, 4);
    } else {
      return chunkArray(items, 1);
    }
  }, [items, isSmallScreen, isMediumScreen, isLargeScreen, isXLargeScreen]);

  const [chunks, setChunks] = useState(getChunks());

  useEffect(() => {
    setChunks(getChunks());
  }, [getChunks]);

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={true}
      animation="fade"
      interval={5000}
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          color: "transparent",
          margin: "0 10px",
        },
      }}
      indicators={false}
    >
      {chunks.map((chunk, i) => (
        <ItemGroup key={i} items={chunk} />
      ))}
    </Carousel>
  );
};

const ItemGroup: React.FC<{ items: ItemProps[] }> = ({ items }) => {
  return (
    <StyledItemGroup>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </StyledItemGroup>
  );
};

const Item: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <CarouselVisitorsStyled elevation={0}>
      <img src={item.imgUrl} alt="" />
    </CarouselVisitorsStyled>
  );
};

function chunkArray(array: ItemProps[], size: number): ItemProps[][] {
  const result: ItemProps[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default CarouselVisitors;
