import styled from "styled-components";
import { CardContainer } from "../UI/StyledCards";
import FooterLink from "./FooterLink";
const Wrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  background: white;
  border-top: 1px solid var(--light-border-color);
  a {
    color: var(--primary-blue);
  }
`;

const FlexWrapper = styled.li`
  padding-left: 5px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    & > ul {
      margin-bottom: 20px;
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <CardContainer>
        <FlexWrapper>
          <FooterLink>Home</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Products</FooterLink>
          <FooterLink>Blogs</FooterLink>
        </FlexWrapper>
      </CardContainer>
    </Wrapper>
  );
};

export default Footer;
