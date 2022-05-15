import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutFormComponent } from './CheckoutForm';

describe('Component CheckoutForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CheckoutFormComponent />);
    expect(component).toBeTruthy();
  });
});
