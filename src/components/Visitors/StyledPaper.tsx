import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  text-align: center;
  padding: 20px;
  img {
    width: 100%;
    height: 434px;
    object-fit: cover;
    border-radius: 60px;
  }
`;

export const StyledItemGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  > div {
    flex: 1;
    margin: 5px;

    @media (max-width: 480px) {
      flex: 0 0 100%;
      img {
        width: 75%;
        height: 350px;
      }
    }

    @media (min-width: 481px) and (max-width: 768px) {
      flex: 0 0 calc(50% - 10px);
      img {
        width: 90%;
        height: 350px;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      flex: 0 0 calc(25% - 10px);
      img {
        width: 100%;
        height: 350px;
      }
    }

    @media (min-width: 1025px) {
      flex: 0 0 calc(25% - 10px);
      img {
        width: 100%;
        height: 350px;
      }
    }
  }
`;
