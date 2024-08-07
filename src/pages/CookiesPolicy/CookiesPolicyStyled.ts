import styled from "styled-components";

const CookiesPolicyStyled = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  .cookies-policy__title {
    font-size: 18px;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    text-align: center;
    text-transform: uppercase;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 15px;
  }

  .cookies-policy__intro {
    font-size: 14px;
    margin-bottom: 1.5rem;
    text-align: justify;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    width: 90%;
    margin: 0 auto;
    line-height: 1.3;
  }

  .cookies-policy__section {
    margin-bottom: 1.5rem;
    text-align: justify;
    width: 90%;
    margin: 0 auto;
  }

  .cookies-policy__section-title {
    font-size: 16px;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
    letter-spacing: 1px;
    padding: 20px 0 5px 0;
  }

  .cookies-policy__section-content {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
  }

  .cookies-policy__date {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkBlueBackground};
  }

  @media (min-width: 480px) {
    .cookies-policy__title {
      font-size: 20px;
    }

    .cookies-policy__intro {
      font-size: 16px;
    }

    .cookies-policy__section-title {
      font-size: 18px;
    }

    .cookies-policy__section-content {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    padding: 30px;

    .cookies-policy__title {
      font-size: 22px;
    }

    .cookies-policy__intro {
      font-size: 18px;
    }

    .cookies-policy__section-title {
      font-size: 20px;
    }

    .cookies-policy__section-content {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    padding: 40px;

    .cookies-policy__title {
      font-size: 24px;
    }

    .cookies-policy__intro {
      font-size: 18px;
    }

    .cookies-policy__section-title {
      font-size: 22px;
    }

    .cookies-policy__section-content {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    padding: 60px;

    .cookies-policy__title {
      font-size: 30px;
    }

    .cookies-policy__intro {
      font-size: 20px;
    }

    .cookies-policy__section-title {
      font-size: 26px;
    }

    .cookies-policy__section-content {
      font-size: 18px;
    }
  }
`;

export default CookiesPolicyStyled;
