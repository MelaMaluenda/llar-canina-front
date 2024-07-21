import { Paper } from "@mui/material";
import styled from "styled-components";

export const ReviewContainer = styled(Paper)`
  max-width: 1200px;
  margin: auto;
  text-align: center;
  padding: 10px;
  margin: 75px 20px 20px 20px;
  box-shadow: none;

  .review {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin-bottom: 15px;
      object-fit: cover;
      align-self: center;
      position: absolute;
      top: -75px;
      z-index: 2;
    }

    .container {
      padding: 130px 20px 50px 20px;
      height: 400px;
      max-width: fit-content;
      border-radius: 25px;
      border: 2px solid #005c53;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      position: relative;
      z-index: 1;
    }

    .name {
      font-family: ${({ theme }) => theme.typography.titleFontFamily};
      font-size: 18px;
      color: ${({ theme }) => theme.colors.darkGreenBackground};
      margin-bottom: 10px;
      text-align: center;
    }

    .text {
      text-align: left;
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    .review {
      img {
      }

      .container {
        height: 380px;
      }

      .name {
      }

      .text {
      }
    }
  }

  @media (min-width: 560px) {
    .review {
      img {
      }

      .container {
        height: 320px;
      }

      .name {
      }

      .text {
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0px;
    .review {
      img {
      }

      .container {
        height: 400px;
        justify-content: space-around;
      }

      .name {
        font-size: 20px;
      }

      .text {
        font-size: 17px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 10px;
    .review {
      img {
      }

      .container {
        height: 350px;
        max-width: 650px;
      }

      .name {
        font-size: 22px;
      }

      .text {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1440px) {
  }
`;

export const StyledReviewGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 480px) {
    width: 80%;
  }

  @media (min-width: 560px) {
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 85%;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }

  > div {
    flex: 1;

    @media (min-width: 768px) and (max-width: 1024px) {
      flex: 0 0 100%;

      @media (min-width: 768px) and (max-width: 1024px) {
        flex: 0 0 50%;
      }

      @media (min-width: 1024px) {
        flex: 0 0 50%;
      }
    }
  }
`;
