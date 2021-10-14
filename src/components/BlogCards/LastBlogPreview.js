import styled from "styled-components";
import React from "react";
import SmallBlogCard from "./SmallBlogCard";
import Divider from "../UI/Divider";
import bgPhotoOne from "../../images/content-management/7.jpeg";
import bgPhotoTwo from "../../images/content-management/8.jpeg";
import bgPhotoThree from "../../images/content-management/9.jpeg";
import bgPhotoFour from "../../images/content-management/10.jpeg";
const SpacedDivider = styled(Divider)`
  margin: 20px 0;
`;

const AuthorText = styled.p`
  color: gray;
  font-size: 0.8rem;
`;

const LastBlogPreview = () => {
  return (
    <React.Fragment>
      <SmallBlogCard
        title="Extremity so attending objection as engrossed"
        text="Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing..."
        bgPic={bgPhotoOne}
      >
        <SpacedDivider />
        <AuthorText>
          By <a href="#">Alene Trenton </a> in <a href="#"> News </a>
        </AuthorText>
      </SmallBlogCard>
      <SmallBlogCard
        title="Extremity so attending objection as engrossed"
        text="Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing..."
        bgPic={bgPhotoTwo}
      >
        <SpacedDivider />
        <AuthorText>
          By <a href="#"> Chris Jamie </a> in <a href="#"> News </a>
        </AuthorText>
      </SmallBlogCard>
      <SmallBlogCard
        title="Extremity so attending objection as engrossed"
        text="Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing..."
        bgPic={bgPhotoThree}
      >
        <SpacedDivider />
        <AuthorText>
          By <a href="#"> Monica Jordan </a> in <a href="#"> News </a>
        </AuthorText>
      </SmallBlogCard>
      <SmallBlogCard
        title="Extremity so attending objection as engrossed"
        text="Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing..."
        bgPic={bgPhotoFour}
      >
        <SpacedDivider />
        <AuthorText>
          By <a href="#"> Monica Jordan </a> in <a href="#"> News </a>
        </AuthorText>
      </SmallBlogCard>
    </React.Fragment>
  );
};

export default LastBlogPreview;
