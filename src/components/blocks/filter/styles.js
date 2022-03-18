import styled from 'styled-components';
import { css } from 'styled-components';
import { Form } from '../../styled';
import tick from './../../../assets/icons/tick.svg';

export const FilterForm = styled(Form)`
    margin-bottom: 18px;
`;

export const StyledLi = styled.li`
    &:not(:last-child) {
        margin-bottom: 32px;
    }
`;

export const LabelForCheckbox = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colorGray};
    border: 1px solid ${props => props.theme.colorForBorder};
    position: relative;
    ${props => props.$isChecked && css`
        background-color: ${props.theme.colorForButton};

        &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            background: transparent url(${tick}) no-repeat center;
        }
    `}
`;