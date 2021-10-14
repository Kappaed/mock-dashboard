import React from "react";
import CommonLayout from "../components/UI/CommonLayout";
import styled from "styled-components";
import SummaryList from "../components/SummaryCards/SummaryList";
import GraphsOverview from "../components/Overview/GraphsOverview";
import "react-datepicker/dist/react-datepicker.css";
import DraftCard from "../components/Draft/DraftCard";
import DiscussionsCard from "../components/Discussion/DiscussionsCard";
import ReferralsCard from "../components/Referrals/ReferralsCard";
import Footer from "../components/Footer/Footer";
import IntroText from "../components/UI/IntroText";

const SocialRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: var(--default-margin-top) 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    & > div {
      margin-bottom: 30px;
    }
  }
`;

const Container = styled.div`
  padding: var(--default-page-padding);
  @media (max-width: 500px) {
    text-align: center;
  }
`;
const MainPage = () => {
  return (
    <CommonLayout>
      <Container>
        <IntroText>dashboard</IntroText>
        <h2>Blog Overview</h2>
        <SummaryList />
        <GraphsOverview />
        <SocialRow>
          <DraftCard />
          <DiscussionsCard />
          <ReferralsCard />
        </SocialRow>
      </Container>
      <Footer />
    </CommonLayout>
  );
};

export default MainPage;
