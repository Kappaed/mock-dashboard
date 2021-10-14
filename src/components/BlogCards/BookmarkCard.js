import styled from "styled-components";
import BlogText from "./BlogText";
import BlogLogo from "./BlogLogo";
import Divider from "../UI/Divider";
import { Card, CardContainer } from "../UI/StyledCards";
import AvatarOne from "../../images/avatars/1.jpg";
import { FaRegBookmark } from "react-icons/fa";

const BookmarkFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BookmarkButton = styled.button`
  padding: 10px 8px;
  background: white;
  border: 1px solid var(--light-border-color);
  outline: none;
  font-size: 0.7rem;
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: lighter;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0.125rem 0.625rem rgb(129 142 163 / 20%),
      0 0.0625rem 0.125rem rgb(129 142 163 / 30%);
  }
`;
const AuthorInfo = styled.div`
  margin-left: 15px;
  font-size: 0.8rem;
`;
const BookmarkCard = (props) => {
  return (
    <Card marginRight="var(--default-margin-right)">
      <CardContainer>
        <BlogText title={props.title} text={props.text} />
      </CardContainer>
      <Divider />
      <CardContainer>
        <BookmarkFooter>
          <AuthorWrapper>
            <BlogLogo
              src={props.avatar}
              position="static"
              alt="Profile Picture of the Author"
            />
            <AuthorInfo>
              <h3>{props.author}</h3>
              <p>{props.date}</p>
            </AuthorInfo>
          </AuthorWrapper>
          <BookmarkButton>
            <FaRegBookmark />
            <span style={{ marginLeft: "5px" }}>Bookmark </span>
          </BookmarkButton>
        </BookmarkFooter>
      </CardContainer>
    </Card>
  );
};

export default BookmarkCard;
