import styled from "styled-components";
import Section from "../../styled/section/section";
import Ul from "../../styled/ul/ul";

export const FeaturesSection = styled(Section)`
    text-align: center;
    background-color: ${props => props.theme.colorWhite};
`;

export const List = styled(Ul)`
  margin-top: 64px;
  margin-bottom: 64px;
`;