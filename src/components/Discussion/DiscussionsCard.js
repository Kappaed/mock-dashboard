import styled from "styled-components";
import CardTitle from "../UI/CardHeader";
import { CardContainer, Card } from "../UI/StyledCards";
import DiscussionList from "./DiscussionList";
import ActionsRow from "./DiscussionActionRow";
import DiscussFooter from "./DiscussFooter";

const DiscussionsCard = (props) => {
  return (
    <Card flexSize={4} marginRight={`var(--default-margin-right)`}>
      <CardTitle>Discussions</CardTitle>
      <DiscussionList />
      <DiscussFooter />
    </Card>
  );
};

export default DiscussionsCard;
