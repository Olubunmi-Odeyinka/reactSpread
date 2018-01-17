import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './../form/input/TextInput';
import SelectInput from './../form/input/SelectInput';
import _ from 'underscore';

const ListRow = (props) => {
  const renderField =(field)=>{
    const fieldConfig = props.spreadDefinition[field];
    const name = field + '#' + props.item.__key__;
    switch(fieldConfig.type){
      case 'compute':
        var dataArray =  _.map(fieldConfig.computeData, (val)=> props.item[val + '']);
        var value = fieldConfig.computeFunction(dataArray);
        return (
        <input
          type='text'
          name={name}
          value={value}
          readOnly
          className="form-control"/>
        );

      case 'select':
        return (
          <SelectInput
            key={field}
            name={name}
            focus={fieldConfig.focus}
            label={fieldConfig.label  || field}
            rowValue={props.item}
            onChange={props.onChangeSpreadData}
            options={fieldConfig.dropdownData || null}
          />
        );
      default:
        return (
          <TextInput
            key={field}
            name={name}
            focus={fieldConfig.focus}
            type={fieldConfig.type}
            label={fieldConfig.label || field}
            rowValue={props.item}
            onChange={props.onChangeSpreadData}
          />
        );
    }
  }

  return (
    <tr>
      {_.map(props.spreadDefinition, (val, key)=> <td key={key}>{renderField(key)}</td> )}
    </tr>
  );
};

ListRow.propTypes = {
  item: PropTypes.object.isRequired,
  spreadDefinition: PropTypes.object.isRequired
};

export default ListRow;
