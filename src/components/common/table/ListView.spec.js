import React from 'react';
import { shallow } from 'enzyme';
import ListView from './ListView';
import spreadData from '../../../fixtures/spreadData';

let spreadDefinition, wrapper;
beforeEach(() => {
  spreadDefinition = {
    name: {
    },
    author: {
    },
    page: {
      type: 'number'
    },
    category: {
      type: 'number'
    }
  }

});

test('Should render list view properly', ()=>{
  wrapper = shallow(<ListView
    listItems={spreadData.data}
    spreadDefinition={spreadData.definition}
    onChangeSpreadData={jest.fn()}
    onChangeSpreadHeader={jest.fn()}
    addRowOrColumn={jest.fn()}
  />);
  expect(wrapper).toMatchSnapshot();
});
