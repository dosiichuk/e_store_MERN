import React from 'react';
import { shallow } from 'enzyme';
import { CartItemComponent } from './CartItem';

describe('Component CartItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartItemComponent item={{ image: 'efgs' }} />);
    expect(component).toBeTruthy();
  });
});
