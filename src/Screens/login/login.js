// NPM IMPORTS
import React from 'react';

// STYLED
import { SignUpCard, ImageLeft, FormRight } from './login.styled';

// CUSTOM IMPORTS
import Form from '../../Components/loginForm/form';

// ASSETS IMPORT
import LeftImg from '../../assets/Login/LeftImg.svg';

const login = () => {
    return (
        <>
            <SignUpCard>
                <ImageLeft>
                    <img alt = "login-img" src = {LeftImg} />
                </ImageLeft>
                <FormRight>
                    <Form />
                </FormRight>
            </SignUpCard>
        </>
    )
}
export default login; 
