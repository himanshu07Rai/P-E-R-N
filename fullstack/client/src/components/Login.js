import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  StyledForm,
  StyledInput,
  Button,
} from "../syledComponents";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Container>
      <Card>
        <h2>Log in</h2>
        <StyledForm onSubmit={(e) => onSubmit(e)}>
          <StyledInput
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button type="submit">Submit</Button>
        </StyledForm>
        <span>
          Don't have an account ?<Link to="/register">Register</Link>
        </span>
      </Card>
    </Container>
  );
};

export default Login;
