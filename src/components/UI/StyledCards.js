import styled, { css } from "styled-components";

export const Card = styled.div`
  background: white;
  padding: 15px 0;
  border-radius: 10px;
  flex: ${(props) =>
    props.flexSize
      ? css`
          ${props.flexSize}
        `
      : "1"};
  margin-right: ${(props) =>
    props.marginRight
      ? css`
          ${props.marginRight}
        `
      : 0};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.center ? "center" : "start")};
  box-shadow: var(--box-shadow-all-sides);
  overflow: ${(props) => (props.overflow ? props.overflow : "visible")};
  max-width: 100%;
`;

export const CardContainer = styled.div`
  padding: 0 15px;
  height: ${(props) =>
    props.height
      ? css`
          ${props.height}
        `
      : "auto"};
  display: ${(props) => (props.flex ? "flex" : "block")};
  align-items: center;
  justify-content: space-between;

  .react-datepicker-wrapper input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`;
