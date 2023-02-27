import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders home screen', () => {
  render( 
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  );
  expect(screen.getByText('Home Page')).toBeVisible()

});


test('renders order summary', () => {
  render( 
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  );

  const placeOrder = screen.getByTestId('orderBtn')
  expect(placeOrder).toBeVisible()
  act(() => placeOrder.click())
  expect(screen.getByText('Order Summary')).toBeInTheDocument()
  
});
