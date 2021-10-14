import CommonLayout from "../components/UI/CommonLayout";
import styled from "styled-components";
import IntroText from "../components/UI/IntroText";
import LeftProfile from "../components/ProfileCards/LeftProfile";
import RightProfile from "../components/ProfileCards/RightProfile";
import Footer from "../components/Footer/Footer";

const ProfileCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 10px;
  @media (max-width: 800px) {
    flex-direction: column;
    & > div {
      margin-right: 0;
      margin-bottom: 30px;
      width: 100%;
    }
  }
`;

const Container = styled.div`
  padding: var(--default-page-padding);
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const ProfilePage = () => {
  return (
    <CommonLayout>
      <Container>
        <IntroText>Overview</IntroText>
        <h2>User Profile</h2>
        <ProfileCards>
          <LeftProfile />
          <RightProfile />
        </ProfileCards>
      </Container>
      <Footer />
    </CommonLayout>
  );
};

export default ProfilePage;
