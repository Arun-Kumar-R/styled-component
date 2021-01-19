// NPM IMPORTS
import React from 'react';

// STYLED
import { MainForm, FormContainer, InputField, LoginButton } from './form.styled';


const Form = () => {
    return (
            <FormContainer>
                <MainForm>
                    <h4>Login User Profile</h4>
                    <InputField 
                        type = "text" 
                        placeholder = "Email*" 
                        name = "email"
                        />
                    <InputField 
                        type = "text" 
                        placeholder = "Type Password here...*" 
                        name = "password"
                    />
                    <LoginButton>Login</LoginButton>
                </MainForm>
            </FormContainer>
    )
}
export default Form; 
