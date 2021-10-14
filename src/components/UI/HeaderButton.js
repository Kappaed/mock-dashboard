import styled from "styled-components";

export const HeaderButton = styled.button`
  background: white;
  outline: none;
  padding: 0px 30px;
  position: relative;
  border-bottom: none;
  border-top: none;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  font-size: 1.2rem;
`;
