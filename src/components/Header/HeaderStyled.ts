import styled from "styled-components";

const HeaderStyled = styled.header`
  .head {
    &__banner {
      background-image: url("/images/SLC-2.jpg");
      background-size: cover;
      position: relative;
      height: 420px;
    }

    &_titular {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.superSize};
      color: ${({ theme }) => theme.colors.light};
      position: absolute;
      top: 150px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
    }
  }
`;

export default HeaderStyled;
