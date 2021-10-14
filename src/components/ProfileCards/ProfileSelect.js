import styled from "styled-components";
import { InputWrapper, Input, Label } from "../UI/StyledInput";

const ProfileSelect = (props) => {
  return (
    <InputWrapper flex={props.flex}>
      <Label htmlFor={props.name}>{props.name}</Label>
      <Input as="select" name={props.name} id={props.name}>
        <option>Choose...</option>
        <option>...</option>
      </Input>
    </InputWrapper>
  );
};

export default ProfileSelect;
