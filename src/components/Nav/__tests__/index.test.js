import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  {name: 'portraits', description: 'Portraits of peole in my life'}
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

// can't get matches snapshot to work with useEffects, which isn't in the snapshot code at the end of the module
describe('Nav component', () => {
  it('renders', () => {
    render(<Nav 
      categores={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})

// // doesn't like destructuring, but the tests still run?
// describe('emoji is visible', () => {
//   it('inserts emoji into the h2', () => {
//   const { getByLabelText } = render(<Nav 
//     categores={categories}
//     setCurrentCategory={mockSetCurrentCategory}
//     currentCategory={mockCurrentCategory}
//   />);

//   expect(getByLabelText('camera')).toHaveTextContent('📸');
//   });
// })  

// // describe('links are visible', () => {
//   it('inserts text into the links', () => {
//     const { getByTestId } = render(<Nav 
//       categores={categories}
//       setCurrentCategory={mockSetCurrentCategory}
//       currentCategory={mockCurrentCategory}
//     />);

//     expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//     expect(getByTestId('about')).toHaveTextContent('About me');
//   });
