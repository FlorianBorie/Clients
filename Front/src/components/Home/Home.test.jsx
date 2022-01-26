import React from 'react';
import { Home } from './Home';
import { render } from '@testing-library/react';

test('Page home', function() {
    render(<Home><div id='demo'></div></Home>)
    const demo = document.querySelector('#demo')
    expect(demo).not.toBeNull()
})