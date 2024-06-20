import React, { useRef, useEffect, useState } from "react";
import VisitorsStyled from "./VisitorsStyled";
import { visitorsData } from "./visitorsData";

const Visitors = (): React.ReactElement => {
  const carrouselRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = carrouselRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[
      currentIndex
    ] as HTMLElement;

    if (imgNode && listNode?.parentElement) {
      const offset = imgNode.offsetLeft - listNode.offsetLeft;
      listNode.parentElement.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction: string) => {
    if (direction === "prev") {
      setCurrentIndex((current) =>
        current === 0 ? visitorsData.length - 4 : current - 1,
      );
    } else if (direction === "next") {
      setCurrentIndex((current) =>
        current === visitorsData.length - 1 ? 0 : current + 1,
      );
    }
  };

  return (
    <VisitorsStyled className="container">
      <div className="container__carrousel">
        <button
          onClick={() => scrollToImage("prev")}
          className="button button__left"
          aria-label="Move carrousel left"
        >
          &#10094;
        </button>
        <button
          onClick={() => scrollToImage("next")}
          className="button button__right"
          aria-label="Move carrousel right"
        >
          &#10095;
        </button>
        <div className="slider-wrapper">
          <ul ref={carrouselRef} className="slider">
            {visitorsData.map((item) => {
              return (
                <li key={item.id}>
                  <img
                    className="slider__section"
                    src={item.imgUrl}
                    alt="Visitor"
                    width="378"
                    height="504"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </VisitorsStyled>
  );
};

export default Visitors;
