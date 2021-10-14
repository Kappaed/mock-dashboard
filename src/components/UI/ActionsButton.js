import styled from "styled-components";

const ActionsButton = styled.button`
  color: white;
  display: inline-block;
  background: var(--primary-blue);
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 0px 10px 4px rgb(73, 134, 247, 0.3);
  }
`;

export default ActionsButton;
