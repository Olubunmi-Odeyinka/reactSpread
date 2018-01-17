import React from 'react';
import { shallow } from 'enzyme';
import ListViewRow from './ListViewRow';

import spreadData from '../../../fixtures/spreadData';

let spreadDefinition, wrapper;
beforeEach(() => {
  spreadDefinition = {
    address: {
    }
  }

});

test('Should render list view row properly', ()=>{
  wrapper = shallow(<ListViewRow item={spreadData[0]} spreadDefinition={spreadDefinition.address}/>);
  expect(wrapper).toMatchSnapshot();
});

