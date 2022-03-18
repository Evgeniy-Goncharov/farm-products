import styled from 'styled-components';
import { Section } from '../../styled';

export const PageGrid = styled(Section)`
    padding-top: 40px;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: 353px 1fr;
    column-gap: 20px;
    background-color: ${props => props.theme.colorGray};
    box-sizing: border-box;
    min-height: 100%;
`;

export const LeftColumn = styled.aside`
    padding-bottom: calc(2 * ${props => props.theme.indent});
`;

export const RightColumn = styled.section`
    position: relative;
`;