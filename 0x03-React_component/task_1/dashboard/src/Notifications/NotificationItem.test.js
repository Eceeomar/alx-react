import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('<NotificationItem />', () => {
    test('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    test('render corrct HTML when type and value props are passed', () =>{
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        const liElement = wrapper.find('li[data-notification-type]');
        expect(liElement.prop('data-notification-type')).toBe('default');
        expect(liElement.text()).toBe('test');
    })

    test('renders correct HTML when htm prop is passed', () => {
        const wrapper = shallow(
            <NotificationItem type='default' html={{ __html: '<u>test</u>' }} />
        );
        const liElement = wrapper.find('li[data-notification-type]');
        expect(liElement.prop('data-notification-type')).toBe('default');
        expect(liElement.html()).toBe('<li data-notification-type="default"><u>test</u></li>');

    });
});