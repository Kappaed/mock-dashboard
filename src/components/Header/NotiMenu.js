import { CardContainer, Card } from "../UI/StyledCards";
import { FaChartLine, FaStoreAlt } from "react-icons/fa";
import styled from "styled-components";
import NotiRow from "../Header/NotiRow";
import DropDownWrapper from "./DropDownWrapper";

const ActionsRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  width: 100%;
  outline: none;
  color: black;
  border: none;
  cursor: pointer;
  background: white;
  height: 100%;
  &:hover {
    background: whitesmoke;
  }
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;
`;

const para1 = (
  <p>
    Your website’s active users count increased by{" "}
    <span style={{ color: "green" }}>28%</span> in the last week. Great job!"{" "}
  </p>
);
const para2 = (
  <p>
    Last week your store’s sales count decreased by{" "}
    <span style={{ color: "red" }}>5.52%</span>. It could have been worse!
  </p>
);

const NotiWrapper = styled(DropDownWrapper)`
  width: 400px;
  @media (max-width: 900px) {
    left: 0;
    width: 100vw;
  }
`;

const NotiMenu = (props) => {
  return (
    <NotiWrapper show={props.show}>
      <NotiRow logo={<FaChartLine />} header="Analytics" text={para1} />
      <NotiRow logo={<FaStoreAlt />} header="Sales" text={para2} />
      <ActionsRow href="#">View All Notifications</ActionsRow>
    </NotiWrapper>
  );
};

export default NotiMenu;
