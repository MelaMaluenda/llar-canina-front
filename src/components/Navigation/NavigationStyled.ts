import styled from "styled-components";

const NavigationStyled = styled.div`
  padding: 0 30px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
  border-bottom: solid 3px ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.darkGreenBackground};

  .menu {
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
      gap: 150px;

      &--us,
      &--services,
      &--rates {
        margin-bottom: 5px;
        font-weight: 400;
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.typography.titleFontFamily};
        font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
        color: ${({ theme }) => theme.colors.light};
        letter-spacing: 2px;
      }

      &--us:hover,
      &--services:hover,
      &--rates:hover {
        padding: 0.5rem 1.5rem;
        transition: all 0.6s linear;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.darkGreenBackground};
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
        font-weight: 500;
        width: 50px;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.lighterBackground};
      }

      &--esp:hover,
      &--cat:hover {
        font-weight: 800;
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.mainText};
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
