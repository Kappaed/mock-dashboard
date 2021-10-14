import styled from "styled-components";
import { Card } from "../UI/StyledCards";
const DropDownWrapper = styled(Card)`
  position: absolute;
  top: 100%;
  right: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0;
  transition: transform 0.7s ease-out;
  z-index: -10;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-200%)")};
  overflow: visible;
  max-width: none;
`;

export default DropDownWrapper;
