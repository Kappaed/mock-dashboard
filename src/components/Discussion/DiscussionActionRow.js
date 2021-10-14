import styled from "styled-components";
import Action from "./DiscussionAction";
const ActionsWrapper = styled.div`
  display: flex;
  button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right-color: transparent;
  }
  button:last-child {
    border-left-color: transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const ActionsRow = () => {
  return (
    <ActionsWrapper>
      <Action approve />
      <Action reject />
      <Action edit />
    </ActionsWrapper>
  );
};

export default ActionsRow;
