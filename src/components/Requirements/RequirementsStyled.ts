import styled from "styled-components";

const RequirementsStyled = styled.article`
  padding: 20px;

  .requirements {
    &__title {
      font-family: ${({ theme }) => theme.typography.titleFontFamily};
      font-size: 18px;
      color: ${({ theme }) => theme.colors.mainText};
      text-align: center;
      margin-bottom: 35px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .card {
    padding: 20px;
    border-radius: 8px;
    border: 3px solid ${({ theme }) => theme.colors.lighterBackground};
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    box-shadow: 0px 4px 8px
      ${({ theme }) => theme.colors.lighterBackgroundOpacity};

    &__title {
      font-size: 18px;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.darkBlueBackground};
      letter-spacing: 1.5px;
    }

    &__description {
      font-size: 14px;
      text-align: justify;
      padding: 5px;
    }
  }

  @media (min-width: 480px) {
    .requirements {
      &__title {
        font-size: 24px;
      }

      &__grid {
        grid-template-columns: 1fr;
      }
    }

    .card {
      &__title {
        font-size: 24px;
      }

      &__description {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 40px;
    .requirements {
      &__title {
      }

      &__grid {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
    }

    .card {
      &__title {
      }

      &__description {
        font-size: 17px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 40px 80px;
    .requirements {
      &__title {
      }

      &__grid {
        gap: 40px;
      }
    }

    .card {
      &__title {
      }

      &__description {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1440px) {
    .requirements {
      &__title {
      }

      &__grid {
      }
    }

    .card {
      &__title {
      }

      &__description {
      }
    }
  }
`;

export default RequirementsStyled;
