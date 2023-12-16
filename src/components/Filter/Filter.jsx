import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={style.searchContainer}>
      <label className={style.search}>
        <input
          type="text"
          name="filter"
          placeholder=" "
          className={style.inputName}
          title="Enter search name"
          onChange={onChange}
          value={value}
        />
        <button type="reset"></button>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;