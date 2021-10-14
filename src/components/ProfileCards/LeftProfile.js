import styled from "styled-components";
import { Card, CardContainer } from "../UI/StyledCards";
import AvatarOne from "../../images/avatars/0.jpg";
import BlogLogo from "../BlogCards/BlogLogo";
import { FaUserPlus } from "react-icons/fa";
import Divider from "../UI/Divider";

const StyledImage = styled(BlogLogo)`
  padding: 0;
  width: 110px;
  background: transparent;
  position: static;
  margin-bottom: 13px;
`;

const GrayText = styled.p`
  color: gray;
  font-size: 0.9rem;
  margin: 7px 0;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
`;

const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const WorkloadHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const FollowButton = styled.button`
  outline: none;
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
  font-size: 0.7rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  background: white;
  cursor: pointer;
  &:hover {
    color: white;
    background: var(--primary-blue);
    box-shadow: 0 5px 15px rgb(0 0 0 / 5%), 0 4px 10px rgb(0 123 255 / 25%);
  }
`;

const LeftWrapper = styled(Card)`
  margin-right: var(--default-margin-right);
`;

const SpacedDivider = styled(Divider)`
  margin: 15px 0;
`;

const ProgressBar = styled.div`
  width: 100%;
  border: none;
  background: whitesmoke;
  height: 5px;
  border-radius: 10px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: ${(props) =>
      props.progress === "100%" ? "10px" : "0"};
    border-bottom-right-radius: ${(props) =>
      props.progress === "100%" ? "10px" : "0"};
    left: 0;
    background: var(--primary-blue);
    height: 100%;
    width: ${(props) => props.progress};
  }
`;

const ProfilePara = styled.p`
  color: var(--blog-text-color);
  font-weight: 300;
  font-size: 0.8rem;
`;

const LeftProfile = () => {
  return (
    <LeftWrapper>
      <ProfileHeader>
        <StyledImage src={AvatarOne} />
        <h2>Sierra Brooks</h2>
        <GrayText>Project Manager</GrayText>
        <FollowButton>
          <FaUserPlus /> Follow
        </FollowButton>
      </ProfileHeader>
      <SpacedDivider />
      <CardContainer>
        <WorkloadHeader>
          <GrayText>Workload</GrayText>
          <p style={{ fontWeight: "light", fontSize: "0.7rem" }}>74%</p>
        </WorkloadHeader>
        <ProgressBar progress="74%" />
      </CardContainer>
      <SpacedDivider />
      <CardContainer>
        <GrayText>Description</GrayText>
        <ProfilePara>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
          quidem, commodi soluta qui quae minima obcaecati quod dolorum sint
          alias, possimus illum assumenda eligendi cumque?
        </ProfilePara>
      </CardContainer>
    </LeftWrapper>
  );
};

export default LeftProfile;
