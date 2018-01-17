import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ListViewRow from './ListViewRow';
import TextInput from '../form/input/TextInput';


const ItemList = ({listItems, spreadDefinition, onChangeSpreadData, onChangeSpreadHeader, addRowOrColumn}) => {

  return (
    <div>
      <table className="table table-bordered">
        <thead>

        <tr>
          {_.map(spreadDefinition, (val, key)=> <th key={key}>
            {/*{ spreadDefinition[key].label ||key.toUpperCase()}*/}
            <input
              type='text'
              name={key}
              value={spreadDefinition[key].label}
              onChange={onChangeSpreadHeader}
              className="form-control"/>
            </th> )}
          <th>
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                <span className="caret"></span></button>
              <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li role="presentation"><button onClick={() => addRowOrColumn(false, 'text')}>Text Column</button></li>
                <li role="presentation"><button onClick={() => addRowOrColumn(false, 'number')}>Number Column</button></li>
              </ul>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
          {listItems && listItems.map(item =>
            <ListViewRow
              key={item.__key__}
              item={item}
              spreadDefinition={spreadDefinition}
              onChangeSpreadData={onChangeSpreadData} />
          )}
        </tbody>
      </table>
      <button onClick={() => addRowOrColumn(true)}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
    </div>
  );
};

ItemList.propTypes = {
  listItems: PropTypes.array.isRequired,
  spreadDefinition: PropTypes.object.isRequired,
  onChangeSpreadData: PropTypes.object,
  onChangeSpreadHeader: PropTypes.object,
  addRowOrColumn: PropTypes.object
};

export default ItemList;
