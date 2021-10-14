import styled from "styled-components";
import Header from "../Header/Header";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logo from "../../images/Mock-logo.svg";
import MenuItems from "./MenuItems";
import { FaPen, FaAddressBook, FaPaperPlane, FaRegSmile } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import SearchBar from "../Header/Searchbar";

const SideMenuWrapper = styled.div`
  flex-direction: column;
  background: white;
  height: 100vh;
  position: fixed;
  z-index: 2000;
  width: ${(props) => (props.mobile ? "100%" : "var(--sidebar-width)")};
  box-shadow: 7px 2px 18px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 7px 2px 18px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 7px 2px 18px 0px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.mobile ? "none" : "flex")};
  a:last-child {
    border-bottom: 1px solid lightgray;
  }
  @media (max-width: 900px) {
    display: ${(props) => (props.mobile && props.showMenu ? "flex" : "none")};
  }
`;

const Heading = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  /* padding: 22px 30px; */
  justify-content: center;
  padding: ${(props) => (props.mobile ? "0" : "20px 0")};
  padding: 20px 0;
  max-height: 70px;
  /* height: 100%; */
  img {
    width: 30px;
    /* flex: 1 0 auto; */
  }

  @media (max-width: 1100px) {
    & h1 {
      /* font-size: 0.7rem; */
      font-size: 0.7rem;
    }
  }
`;

const StyledTitle = styled.h1`
  margin-left: 10px;
  font-size: 1rem;
  &:hover {
    color: black;
  }
`;

const CloseButton = styled.button`
  display: block;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-left: 1px solid var(--light-border-color);
  padding: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;

const Menu = (props) => {
  console.log(props.menuState);
  const Menu = (
    <SideMenuWrapper mobile={props.mobile} showMenu={props.menuState}>
      <Heading mobile={props.mobile ? 1 : 0} to="/dashboard">
        <img src={Logo} alt="Website Logo" />

        {!props.mobile && <StyledTitle>Mock Dashboard</StyledTitle>}
        {props.mobile && (
          <CloseButton onClick={props.toggleMenuState}>
            <FaArrowLeft />
          </CloseButton>
        )}
      </Heading>
      {props.mobile && <SearchBar mobile={props.mobile} />}
      <MenuItems logo={<FaPen />} text="Main Dashboard" link="/dashboard" />
      <MenuItems logo={<FaAddressBook />} text="Blog Posts" link="/blogs" />
      <MenuItems logo={<FaRegSmile />} text="User Profile" link="/user" />
    </SideMenuWrapper>
  );
  return ReactDOM.createPortal(Menu, document.getElementById("menu-root"));
};

export default Menu;
