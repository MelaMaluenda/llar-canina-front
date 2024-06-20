import styled from "styled-components";

const VisitorsStyled = styled.div`
  padding: 10px 40px;
  display: flex;
  align-items: center;
  position: relative;

  .container {
    width: 100%;
    max-width: 1500px; // Ajusta según el diseño deseado
    height: 500px;
    box-shadow: 0 8px 32px 0 ${({ theme }) => theme.colors.lighterBackground};
    border-radius: 60px;
    overflow: hidden;
    position: relative;

    &__carrousel {
      width: 100%;
      position: relative;
    }
  }

  .slider-wrapper {
    width: 100%;
    overflow: hidden;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    padding: 0;
    margin: 0;
    list-style: none;

    &__section {
      margin: 10px 15px;
      width: 308px;
      height: 434px;
      object-fit: cover;
      border-radius: 60px;
    }
  }

  .button {
    display: flex;
    position: absolute;
    top: 50%;
    font-size: ${({ theme }) => theme.typography.superSize};
    background-color: transparent;
    border-radius: 50%;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.darkBlueBackground};
    transform: translate(0, -50%);
    transition: 0.5s ease;
    user-select: none;
    border: none;

    &__left {
      left: 10px;
      padding-right: 15px;
    }

    &__right {
      right: 10px;
      padding-left: 15px;
    }

    &__left:hover,
    &__right:hover {
      background-color: ${({ theme }) => theme.colors.lighterBackground};
    }
  }
`;

export default VisitorsStyled;
