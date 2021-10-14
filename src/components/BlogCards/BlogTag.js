import styled from "styled-components";

const Tag = styled.a`
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  padding: 5px 10px;
  text-align: center;
  position: absolute;
  top: 15px;
  right: ${(props) => (props.flip ? "auto" : "15px")};
  left: ${(props) => (props.flip ? "15px" : "auto")};
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  &:hover:after {
    border-radius: 8px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-size: 100%;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.2;
  }
`;

const BlogTag = (props) => {
  let color;
  let bgColor;
  switch (props.children) {
    case "business":
      color = "white";
      bgColor = "black";
      break;
    case "travel":
      color = "white";
      bgColor = "teal";
      break;
    case "history":
      color = "white";
      bgColor = "var(--primary-blue)";
      break;
    case "technology":
      color = "black";
      bgColor = "orange";
      break;
    default:
      color = "black";
      bgColor = "white";
      break;
  }
  return (
    <Tag color={color} bgColor={bgColor} href={props.href}>
      {props.children}
    </Tag>
  );
};

export default BlogTag;
