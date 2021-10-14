import styled from "styled-components";
import { Card, CardContainer } from "../UI/StyledCards";
import CardTitle from "../UI/CardHeader";
import ActionsButton from "../UI/ActionsButton";

const TitleInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Draft Title",
}))`
  padding-left: 10px;
  border: 1px solid var(--light-border-color);
  font-size: 0.8rem;
  margin-top: 15px;
  border-radius: 4px;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 10px 0;
    padding-left: 10px;
  }
`;
const TextInput = styled.input.attrs((props) => ({
  type: "textarea",
  placeholder: "Draft Text Area",
  rows: "4",
  cols: "50",
}))`
  padding: 0 0 250px 10px;
  border: 1px solid var(--light-border-color);
  font-size: 0.8rem;
  margin: 15px 0;
  border-radius: 4px;
  width: 100%;
  @media (max-width: 1200px) {
    padding-top: 10px;
    padding-bottom: 150px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  & input {
    flex: 1;
  }
`;

const DraftCard = () => {
  return (
    <Card flexSize={3} marginRight="var(--default-margin-right)">
      <CardTitle>New Draft</CardTitle>

      <CardContainer height="100%">
        <FlexWrapper>
          <TitleInput />
          <TextInput />
          <ActionsButton>Create Draft</ActionsButton>
        </FlexWrapper>
      </CardContainer>
    </Card>
  );
};

export default DraftCard;
