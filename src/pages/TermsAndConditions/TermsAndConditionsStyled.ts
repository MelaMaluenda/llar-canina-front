import styled from "styled-components";

const TermsAndConditionsStyled = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  .terms__title {
    font-size: 18px;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    text-align: center;
    text-transform: uppercase;
    width: 90%;
    margin: 0 auto;
  }

  .terms__intro {
    padding: 15px 5px;
    font-size: 16px;
    margin-bottom: 1.5rem;
    text-align: justify;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    width: 95%;
    margin: 0 auto;
  }

  .terms__section {
    margin-bottom: 1.5rem;
    text-align: justify;
    width: 90%;
  }

  .terms__section-title {
    font-size: 18px;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    letter-spacing: 1px;
  }

  .terms__section-content {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    line-height: 1.3;
  }

  .terms__date {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
  }

  @media (min-width: 480px) {
    padding: 10px;
    .terms__title {
      width: 90%;
    }

    .terms__intro {
      width: 80%;
    }

    .terms__section-title {
      width: 90%;
      margin: 0 auto;
    }

    .terms__section-content {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    padding: 30px;

    .terms__title {
      font-size: 22px;
    }

    .terms__intro {
      font-size: 18px;
    }

    .terms__section-title {
      font-size: 20px;
    }

    .terms__section-content {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    padding: 50px;

    .terms__title {
      font-size: 24px;
    }

    .terms__intro {
      font-size: 18px;
    }

    .terms__section-title {
      font-size: 22px;
    }

    .terms__section-content {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    padding: 60px;

    .terms__title {
      font-size: 30px;
    }

    .terms__intro {
      font-size: 20px;
    }

    .terms__section-title {
      font-size: 26px;
    }

    .terms__section-content {
      font-size: 18px;
    }
  }
`;

export default TermsAndConditionsStyled;
