import styled from "styled-components";

const ServicesStyled = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  .card {
    padding: 15px 20px;
    border: 1px solid #cfcfcf;
    border-radius: 20px;
    width: 95%;
    max-width: 400px;
    flex-shrink: 0;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    &__icon {
      width: 140px;
      height: 115px;
    }

    &__title {
      padding: 10px;
      margin-top: 10px;
      text-transform: uppercase;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      font-size: 18px;
    }

    &__text {
      padding: 10px;

      width: 100%;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: 14px;
      text-align: left;
    }
  }

  @media (min-width: 480px) {
    gap: 50px;

    .card {
      padding: 20px 30px;
      border-radius: 30px;

      &__icon {
        width: 180px;
        height: 150px;
      }

      &__title {
        font-size: 24px;
      }

      &__text {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 30px 0;
    flex-direction: row;
    gap: 25px;
    .card {
      border-radius: 43px;
      max-width: 350px;
      height: 450px;

      &__icon {
      }

      &__title {
      }

      &__text {
        margin-top: 15px;
        font-size: 17px;
        text-align: justify;
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 55px;
    .card {
      height: 500px;
      max-width: 450px;

      &__icon {
        width: 220px;
        height: 190px;
      }

      &__title {
        font-size: 32px;
      }

      &__text {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1200px) {
    gap: 65px;
    .card {
      max-width: 500px;
    }
  }

  @media (min-width: 1440px) {
    gap: 80px;
    .card {
      height: 500px;
      max-width: 600px;
      &__icon {
      }

      &__title {
      }

      &__text {
        font-size: 22px;
      }
    }
  }
`;

export default ServicesStyled;
