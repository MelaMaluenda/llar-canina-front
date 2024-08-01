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
    }

    &__description {
      margin-bottom: 30px;
      text-align: justify;
    }

    &__group {
      display: flex;
      flex-direction: column;
    }

    &__label {
      font-weight: bold;
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
      border: 2px solid ${({ theme }) => theme.colors.darkBlueBackground};
    }

    &__textarea {
      height: 150px;
      resize: none;
    }

    &__input--half {
      display: inline-block;
    }

    &__button {
      padding: 0.75em;
      background: ${({ theme }) => theme.colors.lightButton};
      color: ${({ theme }) => theme.colors.light};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 25px;

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
      justify-content: space-between;
      width: 100%;
    }

    &__time-container {
      display: flex;
      justify-content: space-evenly;
    }

    @media (max-width: 320px) {
      &__container {
        padding: 0.5em;
      }
      &__input {
        width: 100%;
      }
    }

    @media (min-width: 320px) and (max-width: 480px) {
      &__container {
        max-width: 90%;
      }
    }

    @media (min-width: 768px) {
      &__input,
      &__textarea {
        padding: 0.75em;
      }

      &__input {
        text-align: left;
        padding-left: 1em;
      }
    }

    @media (min-width: 1024px) {
      &__input,
      &__textarea {
        padding: 1em;
      }
    }
  }
`;

export default ReservationFormStyled;
