import React from 'react';
import { shallow,mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from "../App/AppContext";

describe('<App />', () => {

  beforeEach (() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach (() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });

  it('renders the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('renders the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not render the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('has default state of displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  })

  it('updates state to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  })

  it('updates state to false when handleHideDrawer is called', () => {
    const wrapper =shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  })

  describe('when isLoggedIn is true', () => {
    it('does not render the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('renders the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('when the keys control and h are pressed', () => {
    let originalAlert;
    let logOutMock;

    beforeEach(() => {
      logOutMock = jest.fn();
      const wrapper = mount(
        <AppContext.Provider value={{ user, logOut }}>
          <App logOut={logOutMock} />
        </AppContext.Provider>
      );
      originalAlert = window.alert;
    });

    afterEach(() => {
      window.alert = originalAlert;
      jest.restoreAllMocks();
    });

    it('calls the logOut function', () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));
      expect(logOutMock).toHaveBeenCalled();
    });

    it('displays the alert message "Logging you out"', () => {
      window.alert = jest.fn();
      document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));
      expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });

  });
});
