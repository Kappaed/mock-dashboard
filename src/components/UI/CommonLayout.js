import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const MainWrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: start;
  width: 100%;
`;

const RightWrapper = styled.div`
  width: calc(100% - var(--sidebar-width));
  left: var(--sidebar-width);
  top: 70px;
  position: relative;
  @media (max-width: 900px) {
    left: 0;
    width: 100%;
  }
`;

const CommonLayout = (props) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <Menu />
        <Header />
      </MainWrapper>
      <RightWrapper>{props.children}</RightWrapper>
    </React.Fragment>
  );
};

export default CommonLayout;
