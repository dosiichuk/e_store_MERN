import React from 'react';
import { shallow } from 'enzyme';
import { ScrollToTopComponent } from './ScrollToTop';

describe('Component ScrollToTop', () => {
  it('should render without crashing', () => {
    const component = shallow(<ScrollToTopComponent />);
    expect(component).toBeTruthy();
  });
});
