import styled from "styled-components";

const HeaderStyled = styled.header`
  .head {
    &__banner {
      background-image: url("/images/SLC-2.jpg");
      background-size: cover;
      position: relative;
      height: 170px;
    }

    &__titular {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: 16px;
      width: 80%;
      color: ${({ theme }) => theme.colors.light};
      position: absolute;
      top: 95px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      text-align: center;
    }
  }

  @media (min-width: 480px) {
    .head {
      &__banner {
        height: 220px;
      }
      &__titular {
        font-size: 20px;
        top: 110px;
        letter-spacing: 1.5px;
      }
    }
  }

  @media (min-width: 768px) {
    .head {
      &__banner {
        height: 350px;
      }
      &__titular {
        font-size: 26px;
        top: 110px;
      }
    }
  }

  @media (min-width: 1024px) {
    .head {
      &__banner {
        height: 400px;
      }
      &__titular {
        font-size: 30px;
        top: 120px;
        width: 60%;
      }
    }
  }

  @media (min-width: 1440px) {
    .head {
      &__banner {
        height: 420px;
      }
      &__titular {
        font-size: 32px;
        width: 50%;
      }
    }
  }
`;

export default HeaderStyled;
