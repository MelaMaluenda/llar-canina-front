import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  text-align: center;
  bottom: 0;
  margin-top: 20px;
  padding: 5px;
  width: 100%;

  .footer {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &__menu {
      font-size: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      list-style: none;
      padding: 0;

      &-item {
        margin: 5px 0;
      }
    }

    &__author {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      font-size: 14px;
      gap: 10px;

      &--title {
        margin: 2px 0;
      }

      &--icons {
        width: 25px;
        height: 25px;
      }
    }
  }

  @media (min-width: 480px) {
    .footer {
      &__author {
        flex-direction: row;
        gap: 30px;
        justify-content: center;
        align-items: center;

        &--icons {
          width: 25px;
          height: 25px;
        }
      }

      &__menu {
        font-size: 15px;
      }
    }
  }

  @media (min-width: 768px) {
    .footer {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly;

      &__author {
        font-size: 16px;
        gap: 40px;
        text-align: left;

        &--icons {
          width: 35px;
          height: 35px;
        }
      }

      &__menu {
        gap: 40px;
        flex-direction: row;
      }
    }
  }

  @media (min-width: 1024px) {
    .footer__menu {
      justify-content: space-around;
      font-size: 18px;
      gap: 100px;

      &__author {
        &--title {
          margin: 0px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .footer {
      &__menu {
        padding: 10px 20px;
        font-size: 20px;
        gap: 160px;
      }

      &__author {
        font-size: 18px;
      }
    }
  }
`;

export default FooterStyled;
