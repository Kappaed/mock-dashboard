import styled, { css } from "styled-components";
import { Card, CardContainer } from "../UI/StyledCards";

import BlogTag from "./BlogTag";
import BlogText from "./BlogText";
import BlogLogo from "./BlogLogo";

const StyledImage = styled.img`
  width: ${(props) => (props.flip ? "180px" : "100%")};
  height: ${(props) => (props.flip ? "100%" : "auto")};
  border-top-left-radius: 10px;
  border-top-right-radius: ${(props) => (props.flip ? "0" : "10px")};
  border-bottom-left-radius: ${(props) => (props.flip ? "10px" : "0")};
  max-height: 180px;
  display: block;
  @media (max-width: 950px) {
    max-height: 100%;
    height: 100%;
    width: 100%;
  }
`;

const PicWrapper = styled.div`
  position: relative;
`;

const Logo = styled(BlogLogo)`
  top: ${(props) => (props.flip ? "-10px" : "10px")};
  left: 10px;
  transform: translateY(-100%);
  @media (max-width: 750px) {
    left: -44vw;
  }
`;

const SmallCard = styled(Card)`
  padding-top: 0;
  margin-right: var(--default-margin-right);
  flex-direction: ${(props) => (props.flip ? "row" : "column")};
  padding-bottom: ${(props) => (props.flip ? "0" : "10px")};
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const BlogContainer = styled(CardContainer)`
  margin-top: 10px;
  text-align: left;
`;

const LogoWrapper = styled.a`
  position: relative;
`;
const SmallBlogCard = (props) => {
  return (
    <SmallCard flip={props.horizontal}>
      <PicWrapper>
        <StyledImage
          src={props.bgPic}
          flip={props.horizontal}
          alt="Blog Preview Picture"
        />
        {props.tagName && (
          <BlogTag href="#" flip={props.horizontal}>
            {props.tagName}
          </BlogTag>
        )}
        {props.logo && (
          <LogoWrapper href="#">
            <Logo
              src={props.logo}
              flip={props.horizontal}
              alt="Avatar Preview"
            />
          </LogoWrapper>
        )}
      </PicWrapper>
      <BlogContainer>
        <BlogText title={props.title} text={props.text} date={props.date} />
        {props.children}
      </BlogContainer>
    </SmallCard>
  );
};

export default SmallBlogCard;
