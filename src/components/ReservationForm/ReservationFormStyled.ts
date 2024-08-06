import styled from "styled-components";

const ReservationFormStyled = styled.section`
  .reservation-form {
    &__container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1em;
      background: #f9f9f9;
      border-radius: 8px;
    }

    &__form {
      display: grid;
      gap: 1em;
    }

    &__title {
      margin: 10px;
      font-size: 18px;
      letter-spacing: 2.5px;
    }

    &__description {
      margin-bottom: 30px;
      text-align: justify;
      font-size: 14px;
    }

    &__group {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
    }

    &__label {
      text-align: left;
      margin-bottom: 0.5em;
      padding-left: 0.5em;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
    }

    &__input,
    &__textarea {
      z-index: 2;
      width: 100%;
      padding: 0.5em;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.colors.lighterBackground};
    }

    &__textarea {
      height: 150px;
      resize: none;
    }

    &__input--half {
      display: inline-block;
      width: 110px;
    }

    &__input--circle {
      width: 20px;
      height: 20px;
    }

    &__circle {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

    &__button {
      padding: 0.75em;
      background: ${({ theme }) => theme.colors.lightButton};
      color: ${({ theme }) => theme.colors.light};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 25px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 14px;

      &:hover {
        background: ${({ theme }) => theme.colors.lightButton};
      }
    }

    &__confirmation {
      padding: 2em;
      margin: 1em 0;
      background: #d6d58e80;
      color: #005c53;
      font-size: 1.2em;
      border-radius: 8px;
    }

    &__row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
    }

    &__radio-group {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    &__time-container {
      display: flex;
      justify-content: space-evenly;
    }

    @media (min-width: 480px) {
      &__container {
        padding: 1.5em;
      }

      &__input {
      }

      &__title {
        margin: 15px;
        font-size: 24px;
      }

      &__description {
        font-size: 16px;
        margin-bottom: 35px;
      }
    }

    @media (min-width: 768px) {
      &__container {
        padding: 0.75em;
      }

      &__input {
        text-align: left;
        padding-left: 1em;
      }

      &__title {
        margin: 20px;
      }

      &__description {
        font-size: 17px;
        margin-bottom: 40px;
      }

      &__button {
        font-size: 16px;
      }
    }

    @media (min-width: 1024px) {
      &__input,
      &__textarea {
        padding: 1em;
      }

      &__title {
        font-size: 32px;
      }

      &__description {
        font-size: 20px;
      }
    }

    @media (min-width: 1440px) {
      &__input,
      &__textarea {
      }

      &__title {
      }

      &__description {
        font-size: 22px;
      }
    }
  }
`;

export default ReservationFormStyled;
