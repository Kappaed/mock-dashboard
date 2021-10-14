import styled from "styled-components";
import { Card, CardContainer } from "../UI/StyledCards";
import Divider from "../UI/Divider";
import ProfileInput from "./ProfileInput";
import ProfileSelect from "./ProfileSelect";
import ProfileTextArea from "./ProfileTextArea";
import ActionsButton from "../UI/ActionsButton";

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: var(--default-card-margin-y);
`;

const InputRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    align-items: start;
    flex-direction: column;
    & input {
      width: 100%;
    }
  }
`;

const RightCard = styled(Card)`
  flex: 2;
`;
const RightProfile = () => {
  return (
    <RightCard>
      <CardContainer>
        <StyledTitle>Account Details</StyledTitle>
      </CardContainer>
      <Divider />
      <CardContainer>
        <InputRow>
          <ProfileInput name="First Name" type="text" placeholder="Sierra" />
          <ProfileInput name="Last Name" type="text" placeholder="Brooks" />
        </InputRow>
        <InputRow>
          <ProfileInput
            name="Email"
            type="email"
            placeholder="sierra@example.com"
          />
          <ProfileInput
            name="Password"
            type="password"
            placeholder="Password"
          />
        </InputRow>
        <InputRow>
          <ProfileInput name="Address" type="text" placeholder="1234 Main St" />
        </InputRow>
        <InputRow>
          <ProfileInput name="City" type="text" placeholder="" flex="3" />
          <ProfileSelect name="State" flex="2" />
          <ProfileInput name="Zip" type="text" placeholder="" flex="1" />
        </InputRow>
        <InputRow>
          <ProfileTextArea
            name="Description"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
          />
        </InputRow>
        <ActionsButton>Update Account</ActionsButton>
      </CardContainer>
    </RightCard>
  );
};

export default RightProfile;
