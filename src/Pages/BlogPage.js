import styled from "styled-components";
import CommonLayout from "../components/UI/CommonLayout";
import IntroText from "../components/UI/IntroText";
import SmallBlogPreviews from "../components/BlogCards/SmallBlogPreviews";
import SecondBlogPreviews from "../components/BlogCards/SecondBlogPreviews";
import BookmarkPreview from "../components/BlogCards/BookmarkPreview";
import LastBlogPreview from "../components/BlogCards/LastBlogPreview";
import Footer from "../components/Footer/Footer";

const Container = styled.div`
  padding: var(--default-page-padding);
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const BlogsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--default-margin-top);
  @media (max-width: 950px) {
    flex-wrap: wrap;
    & > div {
      flex: 1 0 auto;
      width: calc(50% - 20px);
      margin-bottom: 20px;
    }
  }
  @media (max-width: 750px) {
    & > div {
      width: 100%;
    }
  }
`;

const SecondBlogRow = styled(BlogsRow)`
  @media (max-width: 900px) {
    & > div {
      width: 100%;
    }
  }
`;

const BlogPage = () => {
  return (
    <CommonLayout>
      <Container>
        <IntroText>Blogs</IntroText>
        <h2>Blog Posts</h2>
        <BlogsRow>
          <SmallBlogPreviews />
        </BlogsRow>
        <SecondBlogRow>
          <SecondBlogPreviews />
        </SecondBlogRow>
        <BlogsRow>
          <BookmarkPreview />
        </BlogsRow>
        <BlogsRow>
          <LastBlogPreview />
        </BlogsRow>
      </Container>
      <Footer />
    </CommonLayout>
  );
};

export default BlogPage;
