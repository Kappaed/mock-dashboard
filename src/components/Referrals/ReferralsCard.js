import styled from "styled-components";
import CardTitle from "../UI/CardHeader";
import { Card, CardContainer } from "../UI/StyledCards";
import ReportFooter from "../UI/ReportFooter";
import Divider from "../UI/Divider";
import ReferralList from "./ReferralList";

const RefCard = styled(Card)`
  @media (max-width: 1200px) {
    margin-right: 20px;
  }
`;

const ReferralsCard = () => {
  return (
    <RefCard flexSize={2}>
      <CardTitle>Top Referrals</CardTitle>
      <ReferralList />
      <ReportFooter />
    </RefCard>
  );
};

export default ReferralsCard;
