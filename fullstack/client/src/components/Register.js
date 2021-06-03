import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  StyledForm,
  StyledInput,
  Button,
} from "../syledComponents";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <Container>
      <Card>
        <h2>Register</h2>
        <StyledForm onSubmit={(e) => onSubmit(e)}>
          <StyledInput
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            name="email"
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
          Already have an account ?<Link to="/login">Log in</Link>
        </span>
      </Card>
    </Container>
  );
};

export default Register;
