import styled from 'styled-components';

// Form Wrapper
export const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Input Fields
export const InputField = styled.input `
    width: 60%;
    margin-top: 15px;
    background-color: ${props => (props.theme.colors.white)};
    padding: 13px 5px;
    padding-right: 0px;
    border: 1px solid ${props => (props.theme.colors.lightGrey)};
    font-size: 0.8rem;
    color: ${props => (props.theme.colors.black)};
    font-family: 'Karla Regular';
    &:focus {
        border-color: ${props => (props.theme.colors.black)};
        outline: none;
    }
`;

// Main Form Section
export const MainForm = styled.form `
    width: 85%;
    display: block;
    h4 {
        color: ${props => props.theme.colors.lightGrey};
        display: block;
        font-size: 1.2rem;
        font-family: 'Karla Regular';
        margin-bottom: 15px;
    }
`;

// LOGIN Button
export const LoginButton = styled.button `
    font-size: 0.9rem;
    margin: 0 auto;
    margin-top: 15px;
    font-family: 'Karla Regular';
    padding: 12px 2px;
    width: 40%;
    border: none;
    outline: none;
    color: ${props => (props.theme.colors.white)};
    font-weight:bold;
    box-shadow: 1px 10px 8px -5px gray;
    background-color: ${props => (props.theme.colors.buttonGrey)};
    &:hover {
        transition: 0.2s ease-in;
        background-color: ${props => (props.theme.colors.white)};
        box-shadow: 1px 10px 12px -5px gray;
        color: ${props => (props.theme.colors.darkGrey)};

    }
`;
