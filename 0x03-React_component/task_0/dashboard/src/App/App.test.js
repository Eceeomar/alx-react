import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('<App />', () => {
    it('App renders without crashing', () => {
        shallow(<App />)
    });

    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);

    })

    it('should contain the Header componenr', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);

    })

    it('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);

    });

    it('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('does not render courselist if logged out', () => {
        const component = shallow(<App />);
        component.setProps({ isLoggedIn: false });
        expect(component.contains(<CourseList />)).toBe(true);
    });
    it('renders courselist if logged in', () => {
        const componenet = shallow(<App isLoggedIn={true} />);
        expect(component.contains(<CourseList />)).toBe(true);
        expect(component.contains(<Login />)).toBe(false);
    });
});





