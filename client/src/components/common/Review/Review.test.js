import React from 'react';
import { shallow } from 'enzyme';
import { ReviewComponent } from './Review';

describe('Component Review', () => {
  it('should render without crashing', () => {
    const component = shallow(<ReviewComponent review={{ _id: 'asf' }} />);
    expect(component).toBeTruthy();
  });
});
