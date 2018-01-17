import React from 'react';
import PropTypes from 'prop-types';
import {getFieldNameFromName } from '../../../../utilities/fieldName';

const SelectInput = ({name, options, focus, onChange, rowValue}) => {
  return (
    <div className="form-group">
      <div className="field">
        <select
          name={name}
          className="form-control"
          value={rowValue[getFieldNameFromName(name)]}
          onChange={onChange}
          autoFocus={focus}>

          <option value=""></option>
          {options && options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.array,
  focus: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default SelectInput;
