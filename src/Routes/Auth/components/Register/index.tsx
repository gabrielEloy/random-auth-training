import SmallHeading from "components/Typography/SmallHeading";
import React from "react";

import RegisterWrapper from "./RegisterStyles";
import Paragraph from "components/Typography/Paragraph";

const Login = () => (
    <RegisterWrapper>
      <SmallHeading className="register-desc-heading">
        Join thousands of learners from around the world
      </SmallHeading>
      <Paragraph className="register-desc-paragraph">
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </Paragraph>
    </RegisterWrapper>
  );

export default Login;
