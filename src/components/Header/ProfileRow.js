import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  outline: none;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 15px 0;
  padding-left: 15px;
  color: ${(props) => (props.color ? props.color : "var(--primary-purple)")};
  &:hover {
    background: whitesmoke;
  }
  svg {
    color: ${(props) => (props.color ? props.color : "gray")};
  }
`;
const ProfileRow = (props) => {
  return (
    <Wrapper to={props.link} color={props.color}>
      {props.logo}
      <span style={{ marginLeft: "4px" }}>{props.text}</span>
    </Wrapper>
  );
};

export default ProfileRow;
