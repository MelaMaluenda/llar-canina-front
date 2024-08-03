import styled from "styled-components";

const RatesStyled = styled.section`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lighterBackgroundOpacity};

  .rates {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    &__title {
      padding: 10px;
      margin-top: 10px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      font-size: 18px;
      letter-spacing: 1.5px;
    }

    &__description {
      padding: 10px;
      width: 100%;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: 14px;
      text-align: left;
      margin-bottom: 20px;
    }

    &__box {
      background-color: ${({ theme }) => theme.colors.light};
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--title {
        font-size: 18px;
        margin-bottom: 10px;
        text-align: left;
      }

      &--bonus {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
        justify-items: center;
      }

      &--deadlines {
        background-color: ${({ theme }) => theme.colors.light};
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      &__description {
        padding: 10px;
        font-size: 14px;
        text-align: left;
      }

      &__image {
        border-radius: 8px;
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }

    .bonus {
      background-color: ${({ theme }) => theme.colors.darkBlueBackground};
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;

      &__title {
        color: ${({ theme }) => theme.colors.light};
        margin-bottom: 10px;
        letter-spacing: 1px;
        font-size: 18px;
      }

      &__description {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.light};
        padding: 5px;
      }
    }

    .deadlines {
      &__title {
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 15px;
        text-align: center;
        font-family: ${({ theme }) => theme.typography.titleFontFamily};
      }

      &__description {
        font-size: ${({ theme }) => theme.typography.regularSize};
        color: ${({ theme }) => theme.colors.mainText};
        margin-bottom: 20px;
        color: grey;
      }

      &__conditions {
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: left;

        &--p {
          font-size: 16px;
        }
      }

      &__final {
        font-size: 14px;
        color: grey;
        margin-top: 15px;
        text-align: center;
      }
    }
  }

  @media (min-width: 480px) {
    .rates {
      &__title {
        font-size: 24px;
      }

      &__description {
        font-size: 16px;
      }

      &__box {
        &--title {
          font-size: 24px;
        }

        &--bonus {
        }

        &--deadlines {
        }
      }

      .content {
        &__description {
          font-size: 16px;
        }

        &__image {
          width: 100%;
        }
      }

      .bonus {
        &__title {
          font-size: 24px;
        }

        &__description {
          font-size: 16px;
        }
      }

      .deadlines {
        &__title {
          font-size: 24px;
        }

        &__description {
        }

        &__conditions {
          &--p {
            font-size: 16px;
          }
        }

        &__final {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .rates {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Asegurar dos columnas */
      grid-gap: 20px;
      max-width: 1200px;

      &__title {
        font-size: 24px;
      }

      &__description {
        font-size: 17px;
      }

      &__box {
        max-width: 100%;
        &--title {
          font-size: 24px;
        }

        &--bonus {
          grid-template-columns: repeat(3, 1fr);
          align-items: stretch;
          grid-column: span 2;
        }

        &--deadlines {
          grid-column: span 2;
        }
      }

      .content {
        &__description {
          font-size: 17px;
        }

        &__image {
          height: 250px;
          max-width: 100%;
          margin: 20px auto;
        }
      }

      .bonus {
        &__title {
          font-size: 24px;
        }

        &__description {
          font-size: 17px;
        }
      }

      .deadlines {
        &__title {
          font-size: 24px;
        }

        &__description {
        }

        &__conditions {
          text-align: center;
          &--p {
            font-size: 17px;
          }
        }

        &__final {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .rates {
      &__title {
        font-size: 32px;
      }

      &__description {
        font-size: 20px;
      }

      &__box {
        &--title {
          font-size: 32px;
        }

        &--bonus {
        }

        &--deadlines {
        }
      }

      .content {
        &__description {
          font-size: 20px;
        }

        &__image {
          height: 290px;
        }
      }

      .bonus {
        &__title {
          font-size: 32px;
        }

        &__description {
          font-size: 20px;
        }
      }

      .deadlines {
        &__title {
          font-size: 32px;
        }

        &__description {
        }

        &__conditions {
          &--p {
            font-size: 20px;
          }
        }

        &__final {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
  }
`;

export default RatesStyled;
