import styled from "styled-components";

const LocationStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.light};

    &__label--white {
      color: ${({ theme }) => theme.colors.light};
      letter-spacing: 2.5px;
      text-transform: uppercase;
      font-size: 18px;
      text-align: center;
    }

    &__footprint {
      width: 25px;
      height: 18px;
    }
  }

  .information {
    background-color: ${({ theme }) => theme.colors.darkGreenBackground};
    padding: 10px;
    color: ${({ theme }) => theme.colors.light};
  }
  .gps {
    display: flex;
    align-items: stretch;

    &__link {
      flex-grow: 2;
    }

    &__map {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .data {
    padding: 10px;

    &__info {
      padding: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;

      &--link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: underline;
        }
      }

      &--icon {
        width: 30px;
        height: 30px;
      }

      &--text {
        font-size: 14px;
        text-align: left;
      }
    }

    &__time {
      &--text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  @media (min-width: 350px) {
    grid-template-rows: 1fr;
    .data {
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 480px) {
    grid-template-rows: 1fr;
    .gps {
      &__map {
        height: 300px;
      }
    }

    .title {
      padding: 15px 0 0 0;
      &__footprint {
        width: 40px;
        height: 33px;
      }

      &__label {
      }
    }

    .information {
      padding: 10px;
    }

    .data {
      padding: 10px;

      &__info {
        padding: 8px;
        &--icon {
          &--text {
            margin: 10px;
          }
        }

        &__time {
          &--text {
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    .gps {
      &__map {
        height: 350px;
      }
    }

    .title {
      &__label {
        padding-bottom: 10px;
      }
    }

    .data {
      &__info {
        padding: 10px;
      }
    }

    .information {
      padding: 10px;
    }
  }

  @media (min-width: 1024px) {
    .gps {
      &__map {
        height: 410px;
      }
    }

    .title {
      &__label {
      }
    }

    .information {
    }

    .data {
      &__info {
        padding: 15px;
        &--icon {
          width: 40px;
          height: 40px;
        }
        &--text {
          font-size: 16px;
        }

        &__time {
          &--text {
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .gps {
      &__map {
        height: 400px;
      }
    }
  }
`;

export default LocationStyled;
