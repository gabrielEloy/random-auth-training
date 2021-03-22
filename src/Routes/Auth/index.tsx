import { useState, useContext } from "react";
import AuthWrapper from "./AuthStyles";
import BrandLogo from "assets/BrandLogo";
import Login from "Routes/Auth/components/Login";
import { ThemeContext } from "contexts/themeContext";
import Button from "components/Button";
import Caption from "components/Typography/Captionn";
import GoogleIcon from "assets/SVG/GoogleIcon";
import GithubIcon from "assets/SVG/GithubIcon";
import FacebookIcon from "assets/SVG/FacebookIcon";
import TwitterIcon from "assets/SVG/TwitterIcon";
import AnchorButton from "components/Anchor";
import Register from "./components/Register";
import * as THEME from "constants/theme";
import { MdLock, MdMail } from "react-icons/md";
import { Input } from "components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistering, setIsRegistering] = useState(false);

  const { theme } = useContext(ThemeContext);

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);
  const toggleIsRegistering = () => setIsRegistering(!isRegistering);

  const [toggleRegisteringText, toggleRefisteringCTA] = isRegistering
    ? ["Already a member?", "login"]
    : ["Don’t have an account yet?", "Register"];

  const UsedBrandLogo = BrandLogo[theme];
  return (
    <AuthWrapper>
      <div className="auth-container">
        <UsedBrandLogo className="brand-logo" />
        {isRegistering ? <Register /> : <Login />}
        <Input
          onChange={handleEmail}
          value={email}
          preffix={<MdMail size={20} fill={THEME[theme].icons} />}
          type="text"
          name="email"
          className="input"
          placeholder="email"
        />
        <Input
          onChange={handlePassword}
          value={password}
          preffix={<MdLock size={20} fill={THEME[theme].icons} />}
          type="password"
          name="password"
          className="input"
          placeholder="password"
        />
        <Button className="auth-action">Login</Button>
        <Caption className="caption">
          or continue with these social profiles
        </Caption>

        <div className="social-login-row">
          <button className="social-login">
            <GoogleIcon width={50} height={50} />
          </button>
          <button className="social-login">
            <GithubIcon width={50} height={50} />
          </button>
          <button className="social-login">
            <FacebookIcon width={50} height={50} />
          </button>
          <button className="social-login">
            <TwitterIcon width={50} height={50} />
          </button>
        </div>
        <Caption className="caption">
          {toggleRegisteringText}{" "}
          <AnchorButton onClick={toggleIsRegistering}>
            {toggleRefisteringCTA}
          </AnchorButton>
        </Caption>
      </div>
    </AuthWrapper>
  );
};

export default Auth;
