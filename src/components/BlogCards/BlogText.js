import styled from "styled-components";
const Wrapper = styled.div`
  text-align: left;
  margin: 10px 0;
`;

const StyledTitle = styled.a`
  display: block;
  margin-top: var(--default-card-margin-y);
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--primary-purple);
  line-height: 1.1;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

const StyledPara = styled.p`
  margin: 15px 0;
  font-weight: light;
  color: ${(props) => (props.color ? props.color : "var(--blog-text-color)")};
  font-size: 0.8rem;
`;

const StyledDate = styled(StyledPara)`
  color: gray;
`;

const BlogText = (props) => {
  return (
    <Wrapper>
      <StyledTitle href="#">{props.title}</StyledTitle>
      <StyledPara>{props.text}</StyledPara>
      {props.date && <StyledDate>{props.date}</StyledDate>}
    </Wrapper>
  );
};

export default BlogText;
