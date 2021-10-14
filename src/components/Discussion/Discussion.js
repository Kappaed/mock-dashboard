import styled from "styled-components";
import { CardContainer } from "../UI/StyledCards";
import ActionsRow from "./DiscussionActionRow";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0;
  border-left: none;
  border-right: none;
  color: rgb(65, 80, 110);
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Avatar = styled.img`
  border-radius: 8px;
  width: 50px;
  margin-right: 20px;
  @media (max-width: 1100px) {
    width: 100px;
  }
  @media (max-width: 500px) {
    width: 200px;
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  text-align: left;
  font-size: 0.9rem;
  width: 100%;
  @media (max-width: 1100px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const GrayedText = styled.span`
  color: gray;
`;

const StyledText = styled.p`
  & span {
    width: 100%;
  }
  @media (max-width: 500px) {
    margin: 15px 0;
  }
`;

const Discussion = (props) => {
  console.log(props.logo);
  return (
    <CardContainer>
      <Wrapper>
        <Avatar src={props.logo} alt="Avatar Image" />
        <Info>
          <p>
            {props.name} <GrayedText>on </GrayedText>
            {props.title} <GrayedText>- {props.date}</GrayedText>
          </p>
          <StyledText>
            <GrayedText>{props.data}</GrayedText>
          </StyledText>
          <ActionsRow />
        </Info>
      </Wrapper>
    </CardContainer>
  );
};

export default Discussion;
