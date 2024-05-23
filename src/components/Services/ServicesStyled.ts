import styled from "styled-components";

const ServicesStyled = styled.section`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  .card {
    padding: 20px 30px;
    border: 1px solid #cfcfcf;
    border-radius: 43px;
    width: 550px;
    height: 450px;
    flex-shrink: 0;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    &__icon {
      width: 220px;
      height: 190px;
    }

    &__title {
      padding: 15px;
      text-transform: uppercase;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      font-size: ${({ theme }) => theme.typography.mainSize};
    }

    &__text {
      padding: 15px;
      width: 500px;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.titleSize};
    }
  }
`;

export default ServicesStyled;
