import styled from "styled-components";

const ShopStyled = styled.section`
  padding: 20px;
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  font-size: 16px;
  text-align: center;
  border-bottom: dotted 2px ${({ theme }) => theme.colors.lighterBackground};

  .icon {
    margin-bottom: 20px;
    &__image {
      max-width: 40%;
      height: auto;
    }
  }

  .shop {
    display: flex;
    flex-direction: column;

    &__container {
      margin-bottom: 20px;

      &--image {
        max-width: 80%;
        height: auto;
        border-radius: 15px;
        transform: scaleX(-1);
      }
    }

    &__explanation {
      width: 90%;
      display: flex;
      flex-direction: column;
      text-align: justify;
      margin: 0 auto;
      gap: 10px;

      &--title {
        font-size: 18px;
        margin-bottom: 20px;
      }

      &--p {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }

  @media (min-width: 480px) {
    .icon {
      &__image {
        max-width: 30%;
      }
    }

    .shop {
      &__container {
        &--image {
          max-width: 80%;
        }
      }

      &__explanation {
        width: 90%;

        &--title {
          font-size: 24px;
        }

        &--p {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 40px;

    .icon {
      &__image {
        max-width: 25%;
      }
    }

    .shop {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;

      &__container {
        &--image {
          max-width: 90%;
          margin: 20px;
        }
      }

      &__explanation {
        width: 70%;

        &--title {
          text-align: left;
          margin-bottom: 10px;
        }

        &--p {
        }
      }
    }
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    padding: 40px 50px;
    .icon {
      &__image {
        max-width: 20%;
      }
    }

    .shop {
      gap: 30px;

      &__container {
        &--image {
          max-width: 100%;
        }
      }

      &__explanation {
        width: 65%;

        &--title {
          font-size: 30px;
        }

        &--p {
          font-size: 18px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 40px 100px;
    .icon {
      &__image {
        max-width: 15%;
      }
    }

    .shop {
      gap: 10px;

      &__container {
        &--image {
          max-width: 100%;
        }
      }

      &__explanation {
        width: 60%;

        &--title {
        }

        &--p {
          font-size: 20px;
        }
      }
    }
  }
`;

export default ShopStyled;
