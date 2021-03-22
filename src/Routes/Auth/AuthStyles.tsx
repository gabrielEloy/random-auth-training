import styled from "styled-components";

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  .auth-container {
    width: 30rem;
    min-height: 34rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0.3125rem;
    box-sizing: border-box;
    padding: 3.125rem 3.625rem;

    .brand-logo {
      margin-bottom: 2rem;
    }

    .auth-action {
      margin-top: 1.4rem;
    }
    .caption {
      text-align: center;
      margin-top: 2rem;
    }

    .input {
      margin-top: 0.9rem;
      :first-of-type {
        margin-top: 0;
      }
    }

    .social-login-row {
      margin-top: 1.375rem;
      display: flex;
      justify-content: space-evenly;
      padding: 0 3rem;
      .social-login {
        cursor: pointer;
        background: none;
        border: none;
        :hover {
          circle {
            stroke: ${({ theme }) => theme.primary};
          }
          path {
            fill: ${({ theme }) => theme.primary};
          }
        }
      }
    }
  }
`;

export default AuthWrapper;
