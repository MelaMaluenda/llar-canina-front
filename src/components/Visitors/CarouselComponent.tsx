import React from "react";
import Carousel from "react-material-ui-carousel";
import { StyledPaper, StyledItemGroup } from "./StyledPaper";

type ItemProps = {
  imgUrl: string;
};

type CarouselComponentProps = {
  items: ItemProps[];
};

const CarouselComponent: React.FC<CarouselComponentProps> = ({ items }) => {
  const getChunks = React.useCallback(() => {
    if (window.innerWidth < 480) {
      return chunkArray(items, 1);
    } else if (window.innerWidth < 768) {
      return chunkArray(items, 1);
    } else if (window.innerWidth < 1024) {
      return chunkArray(items, 2);
    } else {
      return chunkArray(items, 4);
    }
  }, [items]);

  const [chunks, setChunks] = React.useState(getChunks());

  React.useEffect(() => {
    const handleResize = () => {
      setChunks(getChunks());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getChunks]);

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={false}
      animation="slide"
      interval={5000}
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
    <StyledPaper>
      <img src={item.imgUrl} alt="" />
    </StyledPaper>
  );
};

function chunkArray(array: ItemProps[], size: number): ItemProps[][] {
  const result: ItemProps[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default CarouselComponent;
