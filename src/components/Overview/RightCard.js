import styled from "styled-components";
import { Card, CardContainer } from "../UI/StyledCards";
import CardHeader from "../UI/CardHeader";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import RightGraph from "./RightGraph";
import Divider from "../UI/Divider";
import ReportFooter from "../UI/ReportFooter";

const RightCard = () => {
  return (
    <Card overflow="hidden">
      <CardHeader>Users by device</CardHeader>
      <RightGraph />
      <Divider />
      <ReportFooter />
    </Card>
  );
};

export default RightCard;
