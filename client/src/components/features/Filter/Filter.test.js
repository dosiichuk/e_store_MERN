import React from 'react';
import { shallow } from 'enzyme';
import { FilterComponent } from './Filter';

describe('Component Filter', () => {
  it('should render without crashing', () => {
    const component = shallow(<FilterComponent />);
    expect(component).toBeTruthy();
  });
});
