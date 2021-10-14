import styled from "styled-components";

const BlogLogo = styled.img`
  width: 40px;
  padding: 1px;
  background: white;
  box-shadow: 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgb(90 97 105 / 50%);
  border-radius: 50%;
  position: ${(props) => (props.position ? props.position : "absolute")};
  @media (max-width: 750px) {
    width: 80px;
  }
`;

export default BlogLogo;
