import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  beforeEach (() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach (() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2); // Verifying that there are two input tags
    expect(wrapper.find('label')).toHaveLength(2); // Verifying that there are two label tags
  });

  it('verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(true);
  });

  it('verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);

    wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'password123' } });

    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(false);
  });

  it('verify that the button is disabled when one of the input\'s value is empty', () => {
    const wrapper = shallow(<Login />);

    wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });

    expect(wrapper.find('input[type="submit"]').prop('disabled')).toEqual(true);
  });
});
