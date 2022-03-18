import styled, { css } from "styled-components";

const gridList = css`
    margin-right: -${props => props.$indent ? props.indent : 20}px;
    display: flex;
    flex-wrap: wrap;

    li {
        margin-right: ${props => props.indent ? props.indent : 20}px;
        margin-bottom: ${props => props.indent ? props.indent : 20}px;
    }
`;

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    ${props => props.$isGridList ? gridList : ''};
`;

export default Ul;