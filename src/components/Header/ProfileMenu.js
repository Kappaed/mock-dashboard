import DropDownWrapper from "./DropDownWrapper";
import styled from "styled-components";
import Divider from "../UI/Divider";
import ProfileRow from "./ProfileRow";
import { FaUser, FaBlog, FaPaperPlane, FaDoorOpen } from "react-icons/fa";

const MenuCard = styled(DropDownWrapper)`
  width: 100%;

  border-radius: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const ProfileMenu = (props) => {
  return (
    <MenuCard show={props.show}>
      <ProfileRow logo={<FaPaperPlane />} text="Dashboard" link="/" />
      <ProfileRow logo={<FaUser />} text="Profile" link="/user" />
      <ProfileRow logo={<FaBlog />} text="Blog Posts" link="/blogs" />
      <Divider />
      <ProfileRow logo={<FaDoorOpen />} text="Logout" color="red" link="/" />
    </MenuCard>
  );
};
export default ProfileMenu;
