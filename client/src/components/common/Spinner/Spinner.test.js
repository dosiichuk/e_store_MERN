import React from 'react';
import { shallow } from 'enzyme';
import { SpinnerComponent } from './Spinner';

describe('Component Spinner', () => {
  it('should render without crashing', () => {
    const component = shallow(<SpinnerComponent Spinner={{ _id: 'asf' }} />);
    expect(component).toBeTruthy();
  });
});
