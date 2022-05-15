import React from 'react';
import { shallow } from 'enzyme';
import { ReviewBoardComponent } from './ReviewBoard';

describe('Component ReviewBoard', () => {
  it('should render without crashing', () => {
    const component = shallow(<ReviewBoardComponent />);
    expect(component).toBeTruthy();
  });
});
