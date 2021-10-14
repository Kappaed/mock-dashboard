import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid var(--light-border-color);
  border-radius: 5px;
  font-size: 0.8rem;
  color: var(--primary-purple);
  font-weight: lighter;
  outline: none;
  cursor: pointer;
  background: white;
  margin-top: 15px;
  &:hover {
    box-shadow: 0 0.125rem 0.625rem rgb(129 142 163 / 20%),
      0 0.0625rem 0.125rem rgb(129 142 163 / 30%);
  }
`;
const DiscussFooter = () => {
  return (
    <Wrapper>
      <Button>View All Comments</Button>
    </Wrapper>
  );
};

export default DiscussFooter;
