import styled from "styled-components";

const HomeStyled = styled.main`
  .title {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &__footprint {
      width: 40px;
      height: 33px;
    }

    &__label {
      padding: 15px;
      margin: 10px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      font-size: ${({ theme }) => theme.typography.superTitleSize};
      font-weight: 400;
      text-align: center;
    }
  }
`;

export default HomeStyled;
