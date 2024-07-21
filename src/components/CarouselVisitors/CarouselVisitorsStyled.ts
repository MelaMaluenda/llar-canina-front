import { Paper } from "@mui/material";
import styled from "styled-components";

export const CarouselVisitorsStyled = styled(Paper)`
  max-width: 1200px;
  margin: auto;
  text-align: center;

  img {
    width: 100%;
    height: 434px;
    object-fit: cover;
    border-radius: 60px;
  }

  box-shadow: none;
`;

export const StyledItemGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px 10px 25px;
  padding: 20px 20px 40px 20px;
  gap: 20px;

  > div {
    flex: 1;
    margin: 5px;

    @media (max-width: 480px) {
      flex: 0 0 100%;
      img {
        width: 90%;
        height: 350px;
      }
    }

    @media (min-width: 481px) and (max-width: 768px) {
      flex: 0 0 calc(50% - 10px);
      img {
        width: 95%;
        height: 350px;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      flex: 0 0 calc(33.33% - 10px);

      img {
        width: 95%;
        height: 350px;
      }
    }

    @media (min-width: 1025px) {
      flex: 0 0 calc(25% - 10px);
      img {
        width: 95%;
        height: 425px;
      }
    }
  }
`;
