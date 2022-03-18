import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled(Link)`
    box-sizing: border-box;
    min-width: ${(props) => props.$minWidth || 260}px;
    min-height: 60px;
    padding: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colorWhite};
    background-color: ${props => props.theme.colorForButton};

    ${props => props.$disabled ? 
        css`
            opacity: 0.5;

            &:hover,
            &:active {
            }
        ` : css`
            opacity: 1;
            
            &:hover {
                background: ${props => props.theme.colorForButtonHover};
                box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
            }

            &:active {
                box-shadow: none;
            }
        `}    
`;