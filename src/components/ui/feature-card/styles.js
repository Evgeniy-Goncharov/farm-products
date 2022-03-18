import styled from "styled-components";

export const Card = styled.section`
    padding: ${props => props.theme.indent};
    height: 100%;
    background: ${props => props.theme.colorWhite};
    box-sizing: border-box;
    text-align: left;
    width: 540px;
`;

export const CardHeader = styled.header`
    display: flex;
`;

export const FeatureImage = styled.img`
    width: 56px;
    height: 56px;
    margin-right: ${props => props.theme.indent};;
    object-fit: contain;
    border-radius: 8px;
`;

export const Text = styled.p`
    margin-top: 7px;
    margin-bottom: 0;
`;