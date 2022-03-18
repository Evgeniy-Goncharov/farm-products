import styled from 'styled-components';
import { Ul } from './../../styled';

export const Card = styled.article`
    background-color: ${props => props.theme.colorWhite};
    padding: 19px;
    display: grid;
    grid-template-columns: 248px 1fr;
    column-gap: 20px;
    border: 1px solid ${props => props.theme.colorForBorder};
`;

export const Image = styled.img`
    width: 248px;
    height: 248px;
    display: block;
`;

export const TabList = styled(Ul)`
    margin-top: ${props => props.theme.indent};
    margin-bottom: ${props => props.theme.indent};
`;

export const Tab = styled.button`
    padding: 8px 12px;
    background-color: ${props => props.$isActive ? props.theme.colorGreen : props.theme.colorGray};
    border: 1px solid ${props => props.theme.colorForBorder};
    box-sizing: border-box;
    color: ${props => props.$isActive ? props.theme.colorWhite : props.theme.colorBlackForText};
    outline: none;

    &:not(:last-child) {
        margin-right: 8px;
    }
`;

export const Content = styled.div`
    font-size: 14px;
    line-height: 150%;
    padding-right: 20px;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    p {
        margin: 0;
    }
`;

export const Price = styled.span`
    display: inline-block;
    padding: 4px 8px;
    margin-top: 10px;
    background-color: #D8ECFE;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%; 
`;