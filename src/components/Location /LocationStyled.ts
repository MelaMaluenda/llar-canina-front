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

    &__labell {
      color: ${({ theme }) => theme.colors.light};
      letter-spacing: 2.5px;
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

  @media (min-width: 480px) {
    .gps {
      &__map {
      }
    }

    .title {
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
      display: flex;
      justify-content: center;

      &__info {
        padding: 8px;
        &--icon {
          &--text {
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
      }
    }

    .title {
      &__label {
        padding-bottom: 10px;
      }
    }

    .data {
    }

    .information {
      padding: 20px;
    }
  }

  @media (min-width: 1024px) {
    .gps {
      &__map {
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
`;

export default LocationStyled;
