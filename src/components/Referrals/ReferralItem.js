import styled from "styled-components";
import { CardContainer } from "../UI/StyledCards";
import Divider from "../UI/Divider";
import React from "react";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;
  font-size: 0.8rem;
`;
const DraftItem = (props) => {
  return (
    <React.Fragment>
      <CardContainer>
        <Wrapper>
          {props.website}
          <span style={{ color: "gray" }}>{props.stat}</span>
        </Wrapper>
      </CardContainer>
      <Divider />
    </React.Fragment>
  );
};

export default DraftItem;
