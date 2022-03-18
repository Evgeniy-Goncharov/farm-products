import styled from "styled-components";

export const Icon = styled.span`
  top: 0;
  left: 0;
  display: inline-block;
  height: 25px;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 150%;
  font-weight: normal;
  color: ${props => props.theme.colorWhite};
  box-sizing: border-box;
  background-color: ${props => props.$isNegative ? props.theme.colorForNegativeIcon : props.theme.colorForIcon};
`;