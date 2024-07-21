import styled from "styled-components";

const LocationStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    display: flex;
    flex-direction: column;

    &__label {
      color: ${({ theme }) => theme.colors.light};
      letter-spacing: 1.5px;
    }
  }

  .information {
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.darkGreenBackground};
    color: ${({ theme }) => theme.colors.light};
  }
  .gps {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lighterBackgroundOpacity};
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
    .title {
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
    flex-direction: row;

    .data {
    }
  }

  @media (min-width: 1024px) {
    .title {
      &__label {
      }
    }

    .information {
      padding: 10px;
    }

    .data {
      &__info {
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
