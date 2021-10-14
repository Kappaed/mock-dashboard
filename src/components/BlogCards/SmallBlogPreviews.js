import SmallBlogCard from "./SmallBlogCard";
import React from "react";
import AvatarOne from "../../images/avatars/0.jpg";
import AvatarTwo from "../../images/avatars/1.jpg";
import AvatarThree from "../../images/avatars/2.jpg";
import AvatarFour from "../../images/avatars/3.jpg";
import ContentOne from "../../images/content-management/1.jpeg";
import ContentTwo from "../../images/content-management/2.jpeg";
import ContentThree from "../../images/content-management/3.jpeg";
import ContentFour from "../../images/content-management/4.jpeg";
import styled from "styled-components";

const SmallBlogPreviews = () => {
  return (
    <React.Fragment>
      <SmallBlogCard
        bgPic={ContentOne}
        logo={AvatarOne}
        title="Conduct at an replied removal an amongst"
        date="28 February 2019"
        tagName="business"
        text="However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see..."
      />
      <SmallBlogCard
        bgPic={ContentTwo}
        logo={AvatarTwo}
        title="Off tears are day blind smile alone had ready"
        date="28 February 2019"
        tagName="travel"
        text="However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see..."
      />
      <SmallBlogCard
        bgPic={ContentThree}
        logo={AvatarThree}
        title="Difficult in delivered extensive at direction"
        date="28 February 2019"
        tagName="history"
        text="However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see..."
      />
      <SmallBlogCard
        bgPic={ContentFour}
        logo={AvatarFour}
        title="It so numerous if he may outlived disposal"
        date="28 February 2019"
        tagName="technology"
        text="However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see..."
      />
    </React.Fragment>
  );
};

export default SmallBlogPreviews;
