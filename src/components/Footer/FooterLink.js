import styled from "styled-components";

const StyledLink = styled.a`
  margin-right: 20px;
  font-size: 0.9rem;
  &:hover {
    color: var(--primary-purple);
  }
`;

const FooterLink = (props) => {
  return (
    <ul>
      <StyledLink href="#"> {props.children} </StyledLink>
    </ul>
  );
};

export default FooterLink;
