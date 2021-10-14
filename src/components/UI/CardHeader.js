import React from "react";
import styled from "styled-components";
import { CardContainer } from "./StyledCards";
import Divider from "./Divider";

const CardTitle = styled.h2`
  margin: 10px 0;
  font-weight: lighter;
  font-size: 1.1rem;
`;

const CardHeader = (props) => {
  return (
    <React.Fragment>
      <CardContainer>
        <CardTitle> {props.children} </CardTitle>
      </CardContainer>
      <Divider />
    </React.Fragment>
  );
};

export default CardHeader;
