import styled from "styled-components";
import { Section } from '../../styled';

export const PageHeader = styled(Section)`
    min-height: ${props => props.theme.headerHeight};
    padding: 10px ${props => props.theme.pagePadding};
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colorWhite};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    align-items: center;
    position: relative;
`