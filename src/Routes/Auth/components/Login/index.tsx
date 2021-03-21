import { useContext } from "react";
import { Input } from "components/Input";
import SmallHeading from "components/Typography/SmallHeading";
import React from "react";
import * as THEME from "constants/theme";
import { IContextTypes, ThemeContext } from "contexts/themeContext";

import { MdLock, MdMail } from "react-icons/md";
import LoginWrapper from "./LoginStyles";

interface Props {
  email: string;
  password: string;
  handleEmail: (e: React.FormEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Login = ({ email, password, handleEmail, handlePassword }: Props) => {
  const { theme } = useContext(ThemeContext) as IContextTypes;
  return (
    <LoginWrapper>
      <SmallHeading className="login-desc">Login</SmallHeading>
      <Input
        onChange={handleEmail}
        value={email}
        preffix={<MdMail size={20} fill={THEME[theme].icons} />}
        type="text"
        name="email"
        className="input"
      />
      <Input
        onChange={handlePassword}
        value={password}
        preffix={<MdLock size={20} fill={THEME[theme].icons} />}
        type="password"
        name="password"
        className="input"
      />
    </LoginWrapper>
  );
};

export default Login;
