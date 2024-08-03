import styled from "styled-components";

const NavigationStyled = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.light};
  border-bottom: solid 3px ${({ theme }) => theme.colors.lighterBackground};

  .menu {
    &__head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
    }

    &__nav {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      &--services,
      &--rates,
      &--contact {
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.typography.titleFontFamily};
        font-size: 14px;
        color: ${({ theme }) => theme.colors.darkGreenBackground};
        letter-spacing: 1.5px;
      }
    }

    &__languages {
      display: flex;
      flex-direction: row;
      gap: 5px;
      padding: 10px 0;

      &--i {
        width: 40px;
        height: 25px;
        border: 1px solid ${({ theme }) => theme.colors.lighterBackground};
        background-color: ${({ theme }) => theme.colors.light};
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &--i:hover {
        background-color: ${({ theme }) => theme.colors.lighterBackground};
        color: ${({ theme }) => theme.colors.light};
      }
    }
  }

  .logo {
    &__container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &__image {
      width: 50px;
      height: 55px;
    }

    &__text {
      width: 190px;
      height: 40px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: ${({ theme }) => theme.typography.regularSize};

      &--title {
        font-size: ${({ theme }) => theme.typography.mainSize};
        color: ${({ theme }) => theme.colors.darkGreenBackground};
      }

      &--secondtitle {
        font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
        color: ${({ theme }) => theme.colors.lighterBackground};
      }
    }
  }

  .active {
    text-decoration-line: underline;
  }

  .menu__toggle {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: block;
  }

  .menu__content {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    z-index: 3;

    &--open {
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;
    }
  }

  @media (min-width: 480px) {
    padding: 0 20px;
    height: 80px;
    .menu {
      &__head {
      }

      &__nav {
        gap: 20px;
        padding: 10px;

        &--services,
        &--rates,
        &--contact {
          font-size: 17px;
          letter-spacing: 1.5px;
        }
      }

      &__languages {
        flex-direction: row;

        &--i {
          width: 50px;
          height: 30px;
        }

        &--i:hover {
        }
      }
    }

    .logo {
      &__image {
        width: 65px;
        height: 70px;
      }

      &__text {
        width: 200px;
        height: 50px;

        &--title {
        }

        &--secondtitle {
        }
      }
    }

    .menu__content {
      &--open {
        gap: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 3;

    .menu {
      &__head {
        width: auto;
      }

      &__nav {
        padding: 0 20px;
        flex-direction: row;
        gap: 15px;

        &--services,
        &--rates,
        &--contact {
          font-size: 16px;
          letter-spacing: 2px;
        }

        &--services:hover,
        &--rates:hover,
        &--contact:hover {
          padding: 0.5rem 1.5rem;
          transition: all 0.6s linear;
          border-radius: 5px;
          background-color: ${({ theme }) => theme.colors.lighterBackground};
          color: ${({ theme }) => theme.colors.light};
        }
      }

      &__languages {
        padding: 0;
        flex-direction: column;
        &--i {
        }

        &--i:hover {
        }
      }
    }

    .logo {
      &__image {
      }

      &__text {
        &--title {
        }

        &--secondtitle {
        }
      }
    }

    .active {
    }

    .menu__toggle {
      display: none;
    }

    .menu__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: auto;
    }
  }

  @media (min-width: 1024px) {
    .menu {
      &__head {
      }

      &__nav {
        gap: 60px;

        &--services,
        &--rates,
        &--contact {
          font-size: 18px;
        }
      }

      &__languages {
        padding: 10px;
        &--i {
        }

        &--i:hover {
        }
      }
    }

    .logo {
      &__image {
      }

      &__text {
        width: 250px;
        height: 63px;
        &--title {
        }

        &--secondtitle {
        }
      }
    }

    .active {
    }

    .menu__content {
      background-color: transparent;
    }
  }

  @media (min-width: 1440px) {
    .menu {
      &__head {
      }

      &__nav {
      }

      &__languages {
        &--i {
        }

        &--i:hover {
        }
      }
    }

    .logo {
      &__image {
      }

      &__text {
        &--title {
        }

        &--secondtitle {
        }
      }
    }

    .active {
    }
  }
`;

export default NavigationStyled;
