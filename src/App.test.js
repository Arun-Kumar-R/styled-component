import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Screens/Counter/counter';
import { shallow } from 'enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('0');
  });

  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('1');
  });

  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('-1');




































































































    
  });
});