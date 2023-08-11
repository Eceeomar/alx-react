import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from "../App/AppContext";

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1); // Verifying that there is one img tag
    expect(wrapper.find('h1').length).toBe(1); // Verifying that there is one h1 tag
  });

  it('does not render logoutSection with default context values', () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });

  it('renders logoutSection with context values', () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });

  it('calls logOut function when clicking on logOut link', () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    const logOutLink = wrapper.find("a");
    logOutLink.simulate("click");

    expect(context.logOut).toHaveBeenCalled();
    wrapper.unmount();
  });
});
