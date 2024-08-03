import styled from "styled-components";

const HomeStyled = styled.main`
  .title {
    padding: 25px 0 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &__footprint {
      width: 25px;
      height: 18px;

      &--stars {
        width: 160px;
        height: 25px;
      }
    }

    &__label {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      font-size: 18px;
      text-align: center;
    }

    &--stars {
      flex-direction: column;
      padding: 0 0 15px 0;
      gap: 5px;
    }
  }

  @media (min-width: 480px) {
    .title {
      &__footprint {
        width: 40px;
        height: 33px;

        &--stars {
          width: 180px;
          height: 33px;
        }
      }
      &__label {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 768px) {
    .title {
      &__footprint {
      }

      &__label {
        font-size: 32px;
      }
    }
  }

  @media (min-width: 1024px) {
    .title {
      &__footprint {
        &--stars {
          width: 220px;
          height: 40px;
        }
      }

      &__label {
        font-size: 36px;
      }
      &--stars {
        gap: 10px;
      }
    }
  }

  @media (min-width: 1440px) {
    .title {
      &__footprint {
      }

      &__label {
        font-size: 40px;
      }
    }
  }
`;

export default HomeStyled;
