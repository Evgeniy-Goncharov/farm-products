import styled from "styled-components";

export const TitleSize = {
    BIG: 'big',
    MEDIUM: 'medium',
    SMALL: 'small',
    EXTRA_SMALL: 'extra_small'
};

const styles = {
    big: `
        font-size: 44px;
        line-height: 50px;
    `,

    medium: `
        font-size: 36px;
        line-height: 41px;
    `,

    small: `
        font-size: 24px;
        line-height: 31px; 
    `,

    extra_small: `
        font-size: 18px;
        line-height: 27px; 
    `
}

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    margin-bottom: ${props => props.marginBottom || 0}px;
    
    ${props => {
        if (props.size) {
            return styles[props.size]
        }

        return `
            font-size: 36px;
            line-height: 41px;
        `;
    }}
`;

export default Title;