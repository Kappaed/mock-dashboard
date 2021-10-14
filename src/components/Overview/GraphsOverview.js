import styled from "styled-components";
import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const Wrapper = styled.div`
  margin-top: var(--default-margin-top);
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  @media (max-width: 1100px) {
    flex-direction: column;
    & > div {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;

const GraphsOverview = () => {
  return (
    <Wrapper>
      <LeftCard />
      <RightCard />
    </Wrapper>
  );
};

export default GraphsOverview;
