import styled from "styled-components";
import { FaCheck, FaTimes, FaEllipsisV } from "react-icons/fa";

const Button = styled.button`
  background: white;
  padding: 5px 8px;
  /* border-radius: 5p  x; */
  margin-right: 0;

  border: 1px solid var(--light-border-color);
  outline: none;
  display: flex;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 4px rgb(73, 134, 247, 0.3);
  }
  &:active {
    background: var(--primary-blue);
  }
`;
const Action = (props) => {
  let Logo;
  let Text;
  if (props.approve) {
    Logo = <FaCheck style={{ color: "green", marginRight: "4px" }} />;
    Text = "Approve";
  } else if (props.reject) {
    Logo = <FaTimes style={{ color: "red", marginRight: "4px" }} />;
    Text = "Reject";
  } else if (props.edit) {
    Logo = <FaEllipsisV style={{ color: "gray", marginRight: "4px" }} />;
    Text = "Edit";
  }
  return (
    <Button>
      {Logo} {Text}
    </Button>
  );
};

export default Action;
