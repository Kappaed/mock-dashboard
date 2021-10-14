import { CardContainer, Card } from "../UI/StyledCards";
import Divider from "../UI/Divider";
import styled from "styled-components";
import React from "react";
import IntroText from "../UI/IntroText";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  &:hover {
    background: whitesmoke;
  }
`;
const Logo = styled.div`
  background: whitesmoke;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid gray;
  margin-right: 10px;
`;
const TextWrapper = styled.div`
  font-size: 0.9rem;
  text-align: left;
  width: 300px;
  @media (max-width: 900px) {
    width: 100%;
  }
  /* margin-bottom: var(--default-card-margin-y); */
`;

const NotiText = styled.div`
  font-size: 0.9em;
  line-height: 1.5;
`;

const NotiHeader = styled(IntroText)`
  color: gray;
  font-size: 0.5rem;
  margin: 8px 0;
`;

const NotiRow = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Logo> {props.logo}</Logo>
        <TextWrapper>
          <NotiHeader>{props.header}</NotiHeader>
          <NotiText>{props.text}</NotiText>
        </TextWrapper>
      </Wrapper>
      <Divider />
    </React.Fragment>
  );
};

export default NotiRow;
