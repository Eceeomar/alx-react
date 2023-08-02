import React from './react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('<Footer />', () => {
    test('renders without crashing', () => {
        shallow(<Footer />)
    });

    test('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});