import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FaSearch, FaBell, FaAngleDown } from "react-icons/fa";
import Search from "./Searchbar";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Hamburger from "./Hamburger";
const Wrapper = styled.div`
  /* flex: 1; */
  background: white;
  width: calc(100% - var(--sidebar-width));
  left: var(--sidebar-width);
  /* padding: 15px 0; */
  display: flex;
  box-shadow: var(--box-shadow-bottom-side);
  max-height: 70px;
  position: fixed;
  z-index: 2000;
  @media (max-width: 900px) {
    width: 100%;
    left: 0;
    justify-content: space-between;
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  max-height: 70px;

  /* position: relative; */
`;

const Header = () => {
  const Header = (
    <Wrapper>
      <Search />
      <Notifications />
      <LeftWrapper>
        <Profile />
        <Hamburger />
      </LeftWrapper>
    </Wrapper>
  );

  return ReactDOM.createPortal(Header, document.getElementById("header-root"));
};

export default Header;
