import styled from 'styled-components';

export const TextInput = styled.input`
    font-size: 14px;
    color: ${props => props.theme.colorBlackForText};
    padding: 14px 12px;
    background-color: ${props => props.theme.colorGray};
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${props => props.theme.colorForBorder};
    margin: 0;
    margin-bottom: 2px;

    &::placeholder {
        color: ${props => props.theme.colorBlackForText};
    }
`;

export const Price = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    display: block;
    margin-bottom: 32px;
`;