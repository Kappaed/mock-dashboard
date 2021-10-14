import styled from "styled-components";
import SmallBlogCard from "./SmallBlogCard";
import AvatarOne from "../../images/avatars/0.jpg";
import ContentOne from "../../images/content-management/5.jpeg";
import AvatarTwo from "../../images/avatars/1.jpg";
import ContentTwo from "../../images/content-management/6.jpeg";
import React from "react";


const SecondBlogPreviews = () => {
  return (
    <React.Fragment>
      <SmallBlogCard
        bgPic={ContentOne}
        logo={AvatarOne}
        title="Attention he extremity unwilling on otherwise cars backwards yet"
        date="28 February 2019"
        tagName="travel"
        text="However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see..."
        horizontal
      />
      <SmallBlogCard
        bgPic={ContentTwo}
        logo={AvatarTwo}
        title="Attention he extremity unwilling on otherwise cars backwards yet"
        date="28 February 2019"
        tagName="business"
        text="However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see..."
        horizontal
      />
    </React.Fragment>
  );
};

export default SecondBlogPreviews;
