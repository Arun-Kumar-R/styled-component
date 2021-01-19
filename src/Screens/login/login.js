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



// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';

// configure({adapter: new Adapter()});

// import TestComponent from './TestComponent';

// describe('Testing Test Component', () => {
//     let wrapper;

//     beforeEach(() => { wrapper = shallow(<TestComponent />); });

//     it('includes 1 div with class test-container', () => {
//         expect(wrapper.find('div.test-container')).to.have.lengthOf(1);
//     });

//     it('includes a span with Testing text', () => {
//         expect(wrapper.find('span.simple-text').text()).to.be.equal('Testing');
//     });
// });
