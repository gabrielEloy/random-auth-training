import styled from "styled-components";

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  .auth-container {
    width: 30rem;
    height: 34rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0.3125rem;
    box-sizing: border-box;
    padding: 3.125rem 3.625rem;

    .brand-logo{
      margin-bottom: 2rem;
    }

    .auth-action{
      margin-top: 1.4rem;
    }
    .caption{
      text-align: center;
      margin-top: 2rem;
    }
  }
`;

export default AuthWrapper;
