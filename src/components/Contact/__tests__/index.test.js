import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact Form is rendering', () => {
    it('renders', () => {
        render(<ContactForm/>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    });
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('buttontag')).toHaveTextContent('Submit')
  });