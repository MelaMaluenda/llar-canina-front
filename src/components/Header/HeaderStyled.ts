import styled from "styled-components";

const HeaderStyled = styled.header`
  .head {
    &__banner {
      background-image: url("/images/putxeto.jpg");
      background-size: cover;
      background-position: center;
      position: relative;
      height: 380px;
    }

    &_titular {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.superSize};
      color: ${({ theme }) => theme.colors.light};
      position: absolute;
      top: 150px;
      right: 100px;
      z-index: 1;
    }
  }
`;

export default HeaderStyled;
