import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import MainAvatar from "../../images/avatars/0.jpg";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

const ProfilePreview = styled.button`
  position: relative;
  background: white;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  p {
    white-space: nowrap;
    overflow: hidden;
    padding: 0 10px;
  }
  img {
    width: 40px;
    border-radius: 50%;
  }
  svg {
    opacity: 0.5;
  }
`;

const Profile = () => {
  const [show, setShow] = useState(false);
  return (
    <ProfilePreview onClick={() => setShow((prevState) => !prevState)}>
      <img src={MainAvatar} alt="Avatar of a Woman" />
      <p>Sierra Brooks</p>
      <FaAngleDown />
      <ProfileMenu show={show} />
    </ProfilePreview>
  );
};

export default Profile;
