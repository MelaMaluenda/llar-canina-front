import styled from "styled-components";

const CookiesStyled = styled.div`
  .cookies {
    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    &__popup {
      background-color: ${({ theme }) => theme.colors.darkBlueBackground};
      padding: 20px;
      border-radius: 15px 65px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 90%;
      max-width: 500px;
      text-align: center;

      @media (min-width: 480px) {
        max-width: 350px;
      }

      @media (min-width: 768px) {
        max-width: 500px;
      }

      @media (min-width: 1024px) {
        max-width: 600px;
      }

      @media (min-width: 1440px) {
        max-width: 600px;
      }
    }

    &__title {
      margin-top: 0;
      margin-bottom: 10px;
      font-family: ${({ theme }) => theme.typography.titleFontFamily};
      color: ${({ theme }) => theme.colors.light};
      font-size: 22px;
      letter-spacing: 1.5px;

      @media (min-width: 768px) {
        font-size: 26px;
      }
    }

    &__image {
      object-fit: cover;
      border-radius: 35px;
      width: 60%;
      height: auto;

      @media (min-width: 480px) {
        width: 50%;
      }

      @media (min-width: 768px) {
        width: 60%;
        height: auto;
        aspect-ratio: 4 / 3;
      }

      @media (min-width: 1024px) {
        width: 40%;
        aspect-ratio: 1 / 1;
      }

      @media (min-width: 1440px) {
        width: 30%;
        aspect-ratio: 1 / 1;
      }
    }

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &--text {
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        color: ${({ theme }) => theme.colors.light};
        font-size: 14px;
        text-align: left;
        padding: 10px;

        @media (min-width: 480px) {
          font-size: 14px;
          padding: 10px 15px;
        }

        @media (min-width: 768px) {
          font-size: 16px;
          padding: 15px 60px;
        }

        @media (min-width: 1024px) {
          font-size: 17px;
          padding: 15px 65px;
        }
      }
    }

    &__buttons {
      margin: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;

      &--accept,
      &--reject {
        margin-top: 10px;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        border-radius: 4px;
        margin: 0 5px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.light};
        background-color: ${({ theme }) => theme.colors.lightButton};

        &:hover {
          background-color: ${({ theme }) => theme.colors.darkGreenBackground};
        }
      }
    }

    &__link {
      color: white;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export default CookiesStyled;
