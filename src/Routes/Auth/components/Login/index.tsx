import { useContext } from "react";
import { Input } from "components/Input";
import SmallHeading from "components/Typography/SmallHeading";
import React from "react";
import { IContextTypes, ThemeContext } from "contexts/themeContext";

import LoginWrapper from "./LoginStyles";

const Login = () => {
  return (
    <LoginWrapper>
      <SmallHeading className="login-desc">Login</SmallHeading>
    </LoginWrapper>
  );
};

export default Login;
