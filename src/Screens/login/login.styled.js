import styled from 'styled-components';

export const FormRight = styled.div `
    width: 60%;
    margin: auto;
    background-color: ${props => (props.theme.colors.white)};
    padding: 0 0 28px 0;
    position: relative;
`;

export const ImageLeft = styled.div `
    width: 40%;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SignUpCard = styled.div `
    width: 94%;
    height: 90%;
    padding: 2.2% 3%;
    display: flex;
    flex-direction: row;
    margin-top: 3%;
`;
