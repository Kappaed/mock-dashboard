import BookmarkCard from "./BookmarkCard";
import React from "react";
import AvatarOne from "../../images/avatars/1.jpg";
import AvatarTwo from "../../images/avatars/2.jpg";
import AvatarThree from "../../images/avatars/3.jpg";

const BookmarkPreview = () => {
  return (
    <React.Fragment>
      <BookmarkCard
        author="James Khan"
        date="21 March 2011"
        title="Had denoting properly jointure which well books beyond"
        text="In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer..."
        avatar={AvatarOne}
      />
      <BookmarkCard
        author="Chris Jones"
        date="21 March 2011"
        title="Had denoting properly jointure which well books beyond"
        text="In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer..."
        avatar={AvatarTwo}
      />
      <BookmarkCard
        author="Adam James"
        date="21 March 2011"
        title="Had denoting properly jointure which well books beyond"
        text="In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer..."
        avatar={AvatarThree}
      />
    </React.Fragment>
  );
};

export default BookmarkPreview;
