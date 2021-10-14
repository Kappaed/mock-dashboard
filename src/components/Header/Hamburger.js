import { HeaderButton, LogoWrapper } from "../UI/HeaderButton";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Menu from "../Menu/Menu";

const HamburgerButton = styled(HeaderButton)`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

const Hamburger = () => {
  const [openState, setOpenState] = useState(false);
  const toggleOpenState = () => {
    setOpenState(!openState);
    // console.log("open state:  " + openState);
  };
  return (
    <React.Fragment>
      <HamburgerButton onClick={toggleOpenState}>
        <LogoWrapper>
          <FaBars />
        </LogoWrapper>
      </HamburgerButton>
      <Menu menuState={openState} toggleMenuState={toggleOpenState} mobile />
    </React.Fragment>
  );
};

export default Hamburger;
