import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Select(props) {
  const { options, onChange, value, className } = props;
  return(<div>
    <select className={`react-js-assignemnt-select ${className}`} value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
        {option.label}
      </option>))
      }
    </select>
  </div>);
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  value: '',
  className: '',
};

export default Select;