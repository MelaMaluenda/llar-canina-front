import styled from "styled-components";

const WorkStyled = styled.section`
  padding: 20px;
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  font-size: 16px;
  text-align: center;
  border-bottom: dotted 2px ${({ theme }) => theme.colors.lighterBackground};

  .icon {
    margin-bottom: 20px;
    &__image {
      width: 40%;
      max-width: 150px;
      height: auto;
      transition: width 0.3s ease;
    }
  }

  .work {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__explanation {
      text-align: justify;
      width: 90%;

      &--title {
        margin-bottom: 20px;
        font-size: 18px;
      }

      &--p {
        margin-bottom: 20px;
      }
    }

    &__highlight {
    }
  }

  .features {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 80%;
    margin: 0 auto;

    &__box {
      background-color: ${({ theme }) => theme.colors.darkBlueBackground};
      color: ${({ theme }) => theme.colors.light};
      padding: 15px;
      border-radius: 5px;
      text-align: center;
      height: 100%;
    }
  }

  .rates {
    margin-top: 20px;
    margin-bottom: 10px;

    &__button {
      background-color: ${({ theme }) => theme.colors.lightButton};
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (min-width: 480px) {
    .icon {
      &__image {
        width: 30%;
        max-width: 200px;
      }
    }

    .work {
      &__explanation {
        &--title {
          font-size: 24px;
        }
      }
    }

    .features {
      grid-template-columns: 1fr 1fr;
    }

    .rates {
      margin-top: 30px;
    }
  }

  @media (min-width: 768px) {
    padding: 40px;

    .icon {
      &__image {
        width: 22%;
        max-width: 250px;
      }
    }

    .work {
      flex-direction: row;
      justify-content: space-between;

      &__explanation {
        width: 60%;

        &--title {
          text-align: left;
        }
      }
    }
    .features {
      grid-template-columns: 1fr;
      gap: 20px;

      &__box {
        padding: 20px 15px;
      }
    }

    .rates {
      &__button {
        padding: 15px 25px;
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    padding: 40px 50px;

    .icon {
      &__image {
        width: 20%;
        max-width: 300px;
      }
    }
    .work {
      gap: 30px;
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
    .features {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 2fr 2fr;
      height: 50vh;

      &__box {
        align-content: center;
      }
    }

    .rates {
      &__button {
        padding: 20px 30px;
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 40px 100px;

    .icon {
      &__image {
        width: 20%;
        max-width: 350px;
      }
    }

    .work {
      gap: 40px;
      margin-bottom: 60px;
      &__explanation {
        width: 60%;
        &--title {
          font-size: 30px;
        }

        &--p {
          font-size: 20px;
        }
      }
    }
  }
`;

export default WorkStyled;
