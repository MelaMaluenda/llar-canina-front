import styled from "styled-components";

const UsStyled = styled.section`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lighterBackgroundOpacity};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .us {
    padding: 10px;

    &__presentation {
      width: 130px;
      height: 223px;
    }

    &__left {
      border-radius: 60px 10px 10px 60px;
      position: absolute;
      top: 75px;
      left: 20px;
    }

    &__right {
      border-radius: 10px 60px 60px 10px;
      position: absolute;
      top: 75px;
      right: 20px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 210px;

    &__title {
      margin: 5px;
      display: flex;
      align-items: center;
      gap: 10px;

      &--footprint {
        width: 25px;
        height: 18px;
      }

      &--label {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.darkBlueBackground};
        font-size: 18px;
        text-align: center;
      }
    }

    &__text {
      margin-top: 50px;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      text-align: center;
      max-width: 85%;

      &--explanation {
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        font-size: 16px;
        word-break: break-word;
        text-align: justify;
      }
    }
  }
  @media (min-width: 400px) {
    .us {
      &__left {
        left: 50px;
      }

      &__right {
        right: 50px;
      }
    }
  }

  @media (min-width: 480px) {
    padding: 0 30px;

    .us {
      &__presentation {
        width: 150px;
        height: 243px;
      }

      &__left {
        top: 80px;
        left: 60px;
      }

      &__right {
        top: 80px;
        right: 60px;
      }
    }

    .info {
      gap: 230px;

      &__title {
        margin: 10px;
        &--footprint {
          width: 40px;
          height: 33px;
        }

        &--label {
          font-size: 24px;
        }
      }

      &__text {
        max-width: 80%;
        margin-bottom: 10px;

        &--explanation {
        }
      }
    }
  }

  @media (min-width: 560px) {
    .us {
      &__left {
        left: 80px;
      }

      &__right {
        right: 80px;
      }
    }
  }

  @media (min-width: 624px) {
    .us {
      &__presentation {
        width: 160px;
        height: 253px;
      }

      &__left {
        left: 130px;
      }

      &__right {
        right: 130px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 25px 15px;

    .us {
      padding: 0;
      margin-top: 50px;

      &__presentation {
      }

      &__left {
        position: static;
      }

      &__right {
        position: static;
      }
    }

    .info {
      gap: 0;

      &__title {
        &--footprint {
        }

        &--label {
          font-size: 32px;
        }
      }

      &__text {
        text-align: left;
        max-width: 90%;
        margin-top: 20px;
        margin-bottom: 15px;

        &--explanation {
          font-size: 17px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 30px 15px;
    .us {
      padding: 15px;

      &__presentation {
        width: 210px;
        height: 303px;
      }

      &__left {
        border-radius: 80px 10px 10px 80px;
      }

      &__rigth {
        border-radius: 10px 80px 80px 10px;
      }
    }

    .info {
      &__title {
        &--footprint {
        }

        &--label {
          font-size: 36px;
        }
      }

      &__text {
        max-width: 85%;
        margin-bottom: 20px;

        &--explanation {
          font-size: 20px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .us {
      padding: 10px 25px;
      margin-top: 90px;
      margin-bottom: 20px;
      &__presentation {
        width: 240px;
        height: 333px;
      }

      &__left {
      }

      &__rigth {
      }
    }

    .info {
      &__title {
        &--footprint {
        }

        &--label {
          font-size: 40px;
        }
      }

      &__text {
        max-width: 90%;

        &--explanation {
          font-size: 22px;
        }
      }
    }
  }
`;

export default UsStyled;
