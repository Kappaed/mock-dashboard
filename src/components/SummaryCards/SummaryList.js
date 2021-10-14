import Summary from "./Summary";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:last-child {
    margin-right: 0;
  }
  @media (max-width: 1150px) {
    flex-wrap: wrap;
    & > div {
      flex-shrink: 0;
      width: calc(33% - 20px);
      margin-bottom: 30px;
    }
    & > div:nth-child(1) {
      flex-shrink: 0;
      width: calc(50% - 20px);
    }
    & > div:nth-child(2) {
      flex-shrink: 0;
      width: calc(50% - 20px);
    }
  }
  @media (max-width: 850px) {
    & > div {
      width: calc(50% - 20px);
    }
    & > div:last-child {
      width: 100%;
    }
  }
  @media (max-width: 550px) {
    & > div {
      width: 100%;
    }
    & > div:nth-child(1),
    & > div:nth-child(2) {
      width: 100%;
    }
  }
`;

const DUMMY_DATA = [
  {
    title: "Posts",
    total: "2390",
    fillColor: "rgb(180, 220, 230, 0.4)",
    borderColor: "rgba(180, 220, 230)",
    change: "4.7",
  },
  {
    title: "Pages",
    total: "182",
    fillColor: "rgb(170, 220, 180, 0.4)",
    borderColor: "rgba(170, 220, 180, 1)",
    change: "12.4",
  },
  {
    title: "Comments",
    total: "8147",
    fillColor: "rgb(250, 220, 160,0.4)",
    borderColor: "rgb(250, 220, 160)",
    change: "-3.8",
  },
  {
    title: "Users",
    total: "2413",
    fillColor: "rgb(245, 185, 230,0.4)",
    borderColor: "rgb(245, 185, 230)",
    change: "12.4",
  },
  {
    title: "Subscribers",
    total: "17281",
    fillColor: "rgb(180, 205, 250,0.4)",
    borderColor: "rgb(180, 205, 250)",
    change: "-2.4",
  },
];

const SummaryList = () => {
  return (
    <Wrapper>
      {DUMMY_DATA.map((summary, index) => (
        <Summary
          key={index}
          title={summary.title}
          total={summary.total}
          fillColor={summary.fillColor}
          borderColor={summary.borderColor}
          change={summary.change}
        />
      ))}
    </Wrapper>
  );
};

export default SummaryList;
