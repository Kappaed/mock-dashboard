import styled from "styled-components";
import { Input, Label, InputWrapper } from "../UI/StyledInput";

const TextInput = styled(Input)`
  padding-bottom: 70px;
  margin-bottom: 20px;
`;
const ProfileTextArea = (props) => {
  return (
    <InputWrapper flex={props.flex}>
      <Label htmlFor={props.name}>{props.name}</Label>
      <TextInput
        as="textarea"
        name={props.name}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
};

export default ProfileTextArea;
