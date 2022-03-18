import styled from "styled-components";

const Section = styled.section`
    padding: 100px ${props => props.theme.pagePadding};
    box-sizing: border-box;
    width: ${props => props.theme.pageWidth};
    margin: 0 auto;
`;

export default Section;