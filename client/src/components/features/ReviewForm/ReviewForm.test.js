import React from 'react';
import { shallow } from 'enzyme';
import { ReviewFormComponent } from './ReviewForm';

describe('Component ReviewForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<ReviewFormComponent />);
    expect(component).toBeTruthy();
  });
});
