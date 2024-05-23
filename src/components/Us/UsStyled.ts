import styled from "styled-components";

const UsStyled = styled.section`
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.lighterBackgroundOpacity};
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;

  .us {
    padding: 25px;

    &__presentation {
      width: 348px;
      height: 504px;
    }

    &__left {
      border-radius: 80px 10px 10px 80px;
    }

    &__right {
      border-radius: 10px 80px 80px 10px;
    }
  }

  .info {
    &__title {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;

      &--footprint {
        width: 40px;
        height: 33px;
      }

      &--label {
        margin: 10px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.darkBlueBackground};
        font-size: ${({ theme }) => theme.typography.superTitleSize};
        font-weight: 400;
        text-align: center;
      }
    }

    &__text {
      padding: 10px;
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 35px;

      &--explanation {
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        font-size: ${({ theme }) => theme.typography.titleSize};
      }
    }
  }
`;

export default UsStyled;
