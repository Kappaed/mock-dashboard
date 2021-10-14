import styled from "styled-components";
import React from "react";
import { InputWrapper, Label, Input } from "../UI/StyledInput";

const ProfileInput = (props) => {
  return (
    <InputWrapper flex={props.flex}>
      <Label htmlFor={props.name}>{props.name}</Label>
      <Input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
};

export default ProfileInput;
