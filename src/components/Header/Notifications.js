import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import NotiMenu from "./NotiMenu";
import { useState } from "react";
import { HeaderButton, LogoWrapper } from "../UI/HeaderButton";

const NotiButton = styled(HeaderButton)`
  &:before {
    content: "2";
    color: white;
    font-size: 0.5rem;
    background: red;
    border-radius: 50%;
    padding: 4px 6px;
    position: absolute;
    left: 80%;
    top: 80%;
    transform: translate(-80%, -80%);
  }
`;

const Notifications = () => {
  const [show, setShow] = useState(false);
  return (
    <NotiButton onClick={() => setShow(!show)}>
      <LogoWrapper>
        <FaBell />
      </LogoWrapper>
      <NotiMenu show={show} />
    </NotiButton>
  );
};

export default Notifications;
