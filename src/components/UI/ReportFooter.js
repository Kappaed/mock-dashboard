import styled from "styled-components";
import { FaArrowRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
const ActionWrapper = styled.button`
  outline: none;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: var(--primary-blue);
  }
`;
const CardFooter = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
    -webkit-appearance: none;
    appearance: none;
  }
  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;

const OptionWrapper = styled.div`
  position: relative;
`;

const ChevronWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
  font-size: 0.7rem;
  color: gray;
`;

const CardSelect = styled.select`
  padding: 10px 15px;
  padding-right: 30px;
  border: 1px solid var(--light-border-color);
  background: white;
  border-radius: 8px;
  font-size: 0.7rem;
  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow-all-sides);
  }
`;
const ReportFooter = () => {
  return (
    <CardFooter>
      <OptionWrapper>
        <CardSelect defaultValue="Last Week">
          <option value="Last Week">Last Week</option>
          <option value="Today">Today</option>
          <option value="Last Month">Last Month</option>
          <option value="Last Year">Last Year</option>
        </CardSelect>
        <ChevronWrapper>
          <FaCaretUp />
          <FaCaretDown />
        </ChevronWrapper>
      </OptionWrapper>
      <ActionWrapper>
        <span style={{ marginRight: "5px" }}> Full Report </span>
        <FaArrowRight />
      </ActionWrapper>
    </CardFooter>
  );
};

export default ReportFooter;
