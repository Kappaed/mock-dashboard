import styled from "styled-components";
import LeftGraph from "./LeftGraph";
import { Card, CardContainer } from "../UI/StyledCards";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaCalendar, FaAngleRight } from "react-icons/fa";
import CardTitle from "../UI/CardHeader";

const BackgroundWrapper = styled.div`
  width: 100%;
  background: rgb(248, 248, 248);
  padding: 10px;
  /* border-top: 1px solid rgb(225, 230, 235); */
  border-bottom: 1px solid rgb(225, 230, 235);
  input {
    border: 1px solid rgb(225, 230, 235);
    padding: 10px 15px;
    text-align: center;
    border-radius: 5px;
  }

  .react-datepicker-wrapper {
    width: auto;
  }
  @media (max-width: 500px) {
    .react-datepicker-wrapper {
      width: 100%;
    }
  }
`;

const CalendarWrapper = styled.button`
  padding: 9px;
  border: 1px solid rgb(225, 230, 235);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: auto;
  max-width: 70%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const ReportButton = styled.button`
  outline: none;
  border: 1px solid rgb(225, 230, 235);
  padding: 8px 16px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  font-size: 0.7rem;
  background: white;
  display: flex;
  align-items: center;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(178, 178, 178, 0.2);
  }
  @media (max-width: 500px) {
    padding: 12px 16px;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
`;

const BackgroundContainer = styled(CardContainer)`
  @media (max-width: 750px) {
    flex-direction: column;
    /* padding: 30px 0; */
    & > div {
      margin-bottom: 15px;
    }
    & input {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

const DateContainer = styled.div`
  display: flex;
  max-width: 400px;
  border-right: none;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    & input {
      width: 100%;
      margin-bottom: 10px;
      border-right: 1px solid var(--light-border-color);
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const LeftCard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Card
      flexSize={2}
      marginRight="var(--default-margin-right)"
      overflow="hidden"
    >
      <CardTitle>Users</CardTitle>
      <BackgroundWrapper>
        <BackgroundContainer flex>
          <DateContainer>
            <DatePicker
              placeholderText="Start Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              placeholderText="End Date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <CalendarWrapper>
              <FaCalendar />
            </CalendarWrapper>
          </DateContainer>
          <ButtonWrapper>
            <ReportButton>
              View Full Report <FaAngleRight />
            </ReportButton>
          </ButtonWrapper>
        </BackgroundContainer>
      </BackgroundWrapper>
      <CardContainer>
        <LeftGraph />
      </CardContainer>
    </Card>
  );
};

export default LeftCard;
