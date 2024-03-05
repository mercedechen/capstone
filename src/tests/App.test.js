/**
 * @jest-environment jsdom
 */

import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </Provider>
  )
}

const customRender = ( ui, options ) => {
  render(ui, {wrapper: Providers, ...options})
}

describe('App component', () => {
  test('successful login', () => {
    customRender(<Login />)
    const heading = screen.getByText("Returning User")
    expect(heading).toBeInTheDocument();
  })
});