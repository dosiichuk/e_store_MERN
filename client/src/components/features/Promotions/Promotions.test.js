import React from 'react';
import { shallow } from 'enzyme';
import { PromotionsComponent } from './Promotions';

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotionsComponent />);
    expect(component).toBeTruthy();
  });
});
