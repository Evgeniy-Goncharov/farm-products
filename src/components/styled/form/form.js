import styled from 'styled-components';

const Form = styled.form`
    padding: 19px;
    border: 1px solid ${props => props.theme.colorForBorder};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    background-color: ${props => props.theme.colorWhite};
`;

export default Form;