import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--light-border-color);
  border-radius: 4px;
  padding: 10px 15px;
  display: block;
  color: var(--blog-text-color);
  font-weight: 300;
  font-size: 0.8rem;
  width: 100%;
  background: transparent;
`;

export const InputWrapper = styled.div`
  flex: ${(props) => (props.flex ? props.flex : "1")};
  margin-right: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: var(--blog-text-color);
  font-weight: 300;
  text-align: left;
  font-size: 0.8rem;
  display: block;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 20px;
`;
