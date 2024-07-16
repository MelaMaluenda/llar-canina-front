import styled from "styled-components";

const NavigationStyled = styled.div`
  padding: 0 30px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
  border-bottom: solid 3px ${({ theme }) => theme.colors.lighterBackground};
  background-color: ${({ theme }) => theme.colors.light};

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
        color: ${({ theme }) => theme.colors.darkGreenBackground};
        letter-spacing: 2px;
      }

      &--us:hover,
      &--services:hover,
      &--rates:hover {
        padding: 0.5rem 1.5rem;
        transition: all 0.6s linear;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.lighterBackground};
        color: ${({ theme }) => theme.colors.light};
      }
    }

    &__languages {
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;

      &--i {
        font-weight: 500;
        width: 50px;
        height: 30px;
        border: 1px solid ${({ theme }) => theme.colors.lighterBackground};
        background-color: ${({ theme }) => theme.colors.light};
      }

      &--i:hover {
        font-weight: 800;
        background-color: ${({ theme }) => theme.colors.lighterBackground};
        color: ${({ theme }) => theme.colors.light};
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
