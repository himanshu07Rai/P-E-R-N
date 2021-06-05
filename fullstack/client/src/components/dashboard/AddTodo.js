import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/actions/dashboard";

const StyledForm = styled.form`
  /* padding: 1.2rem 0; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 17px;
  width: 90%;
`;

const Button = styled.button`
  margin-right: 10px;
  transition: transform 0.2s;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #0f6;
  color: #fff;
  &:hover {
    transform: scale(1.2);
  }
`;
const AddTodo = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    dispatch(addTodo({ description }));
    setDescription("");
  };
  return (
    <>
      <h2>Add Todo</h2>
      <StyledForm onSubmit={(e) => onSubmit(e)}>
        <StyledInput
          type="text"
          placeholder="Description.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </StyledForm>
    </>
  );
};

export default AddTodo;
