import styled from "styled-components";
import Section from "../../styled/section/section";

export const PageFooter = styled(Section)`
    min-height: ${props => props.theme.headerHeight};
    padding: 10px ${props => props.theme.pagePadding};
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colorWhite};
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;  
`;