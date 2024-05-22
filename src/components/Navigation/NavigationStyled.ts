import styled from "styled-components";

const NavigationStyled = styled.div`
  padding: 0 30px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .menu {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    &__head {
      padding: 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    &__nav {
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 60px;

      &--us,
      &--services,
      &--rates {
        margin-bottom: 5px;
        font-weight: 400;
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.typography.titleFontFamily};
        font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
        color: ${({ theme }) => theme.colors.darkGreenBackground};
        letter-spacing: 2px;
      }

      &--us:hover,
      &--services:hover,
      &--rates:hover {
        padding: 0.5rem 1.5rem;
        transition: all 0.6s linear;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.darkGreenBackground};
        color: ${({ theme }) => theme.colors.light};
      }
    }

    &__languages {
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      &--esp,
      &--cat {
        width: 50px;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.lighterBackground};
      }
    }
  }

  .logo {
    &__image {
      width: 65px;
      height: 70px;
    }

    &__text {
      width: 250px;
      height: 63px;
    }

    &__text {
      padding: 0 20px 0 20px;
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
    font-weight: 900;
    text-decoration-line: underline;
  }
`;

export default NavigationStyled;
