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
      top: 95px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      text-align: center;
      width: 90%;
      position: absolute;

      &--1,
      &--2 {
        font-size: 15px;
        padding: 1px;
        color: ${({ theme }) => theme.colors.light};
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
      }
    }
  }

  @media (min-width: 480px) {
    .head {
      &__banner {
        height: 220px;
      }
      &__titular {
        top: 110px;
        width: 85%;

        &--1,
        &--2 {
          font-size: 20px;
          letter-spacing: 1.5px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .head {
      &__banner {
        height: 350px;
      }
      &__titular {
        top: 100px;

        &--1,
        &--2 {
          font-size: 26px;
          padding: 2px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .head {
      &__banner {
        height: 400px;
      }
      &__titular {
        top: 110px;
        width: 60%;

        &--1,
        &--2 {
          font-size: 30px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .head {
      &__banner {
        height: 420px;
      }
      &__titular {
        top: 130px;
        width: 60%;

        &--1,
        &--2 {
          font-size: 32px;
          padding: 3px;
        }
      }
    }
  }
`;

export default HeaderStyled;
