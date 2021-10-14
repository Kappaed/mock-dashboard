import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaPen, FaAddressBook, FaPaperPlane, FaRegSmile } from "react-icons/fa";

const Wrapper = styled(NavLink)`
  font-size: 0.9rem;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  /* text-align: center; */
  padding: 20px;
  border-top: 1px solid lightgray;
  cursor: pointer;
  transition: border-left 0.1s ease-in;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: rgb(54, 121, 246);
    background: rgb(251, 251, 251);
    border-left: 3px solid rgb(54, 121, 246);
    a {
      color: rgb(54, 121, 246);
    }
  }
  &.active {
    color: rgb(54, 121, 246);
    background: rgb(251, 251, 251);
    border-left: 3px solid rgb(54, 121, 246);

    a {
      color: rgb(54, 121, 246);
    }
  }
`;

const MenuItems = (props) => {
  return (
    <Wrapper to={props.link} activeClassName="active">
      {props.logo}
      {props.text}
    </Wrapper>
  );
};

export default MenuItems;
