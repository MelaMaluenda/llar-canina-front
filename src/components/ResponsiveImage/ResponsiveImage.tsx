import React from "react";
import { useMediaQuery } from "@mui/material";

type ResponsiveImageProps = {
  imgUrl: {
    small: string;
    medium: string;
    large: string;
    xlarge?: string;
  };
  alt: string;
  className?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  imgUrl,
  alt,
  className,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 479px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 480px) and (max-width: 767px)",
  );
  const isLargeScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)",
  );
  const isXLargeScreen = useMediaQuery("(min-width: 1024px)");

  const imageUrl = isSmallScreen
    ? imgUrl.small
    : isMediumScreen
      ? imgUrl.medium
      : isLargeScreen
        ? imgUrl.large
        : isXLargeScreen && imgUrl.xlarge
          ? imgUrl.xlarge
          : imgUrl.large;

  return <img src={imageUrl} alt={alt} className={className} />;
};

export default ResponsiveImage;
