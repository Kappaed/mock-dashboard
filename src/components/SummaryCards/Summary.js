import React from "react";
import { FaDigitalTachograph } from "react-icons/fa";
import styled from "styled-components";
import BackGroundGraph from "./BackgroundGraph";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Wrapper = styled.div`
  width: calc(20% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  box-shadow: var(--box-shadow-all-sides);
  padding-top: 20px;
  width: 100%;
  background: white;
  border-radius: 10px;
  text-align: center;
  position: relative;
  h2 {
    margin-bottom: 10px;
  }
`;

const Intro = styled.h2`
  font-weight: lighter;
  color: gray;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 10;
`;

const TotalNumber = styled.h2`
  font-size: 2rem;
  z-index: 10;
`;

const ChangeWrapper = styled.div`
  text-align: center;
  display: flex;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  z-index: 10;
  color: ${(props) => (props.green ? "green" : "red")};
  font-size: 0.9rem;
`;

const Summary = (props) => {
  const convertedTotal = +props.total;
  let data = [1, 2, 3, 4, 5, 6];
  let positiveChange = true;
  let value = props.change;
  if (value < 0) {
    positiveChange = false;
    value = Math.abs(value);
  }
  data = data.map((element) => Math.floor(Math.random() * 100) + 1);

  return (
    <Wrapper>
      <Container>
        <Intro>{props.title}</Intro>
        <TotalNumber>{convertedTotal.toLocaleString()}</TotalNumber>
        <BackGroundGraph
          data={data}
          bgColor={props.fillColor}
          color={props.borderColor}
        />
        <ChangeWrapper green={positiveChange}>
          {positiveChange && <FaArrowUp />}
          {!positiveChange && <FaArrowDown />}
          {`${value}%`}
        </ChangeWrapper>
      </Container>
    </Wrapper>
  );
};

export default Summary;
