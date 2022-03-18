import styled from "styled-components";
import Section from "../../styled/section/section";
import aboutBg from './../../../assets/bg/about-bg.svg';

export const AboutSection = styled(Section)`
    padding: 183px 660px 183px ${props => props.theme.pagePadding};
    background: ${props => props.theme.colorForBlueBackground} url(${aboutBg}) no-repeat bottom right 90px;
    background-size: 446px 446px;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: ${props => props.theme.indent};
  margin-bottom: 6px;
`;