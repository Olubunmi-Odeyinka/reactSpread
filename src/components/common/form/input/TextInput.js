import React from 'react';
import PropTypes from 'prop-types';
import {getFieldNameFromName } from '../../../../utilities/fieldName';

const TextInput = ({name, type, rowValue, onChange, readOnly}) => {

  return (
    <div className='form-group'>
      <div className="field">
        <input
          type={type || 'text'}
          name={name}
          value={rowValue[getFieldNameFromName(name)]}
          onChange={onChange}
          readOnly={readOnly}
          className="form-control"/>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  focus: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default TextInput;
