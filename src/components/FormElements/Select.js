import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Select extends PureComponent {
  render() {
    const { config, changeHandler, value } = this.props;
    const { name, label, isMultiple } = config;
    const values = this.props.config.values || [];
    const multiSelect = isMultiple ? "multiple" : "";
    return (
      <div className="form-group">
        <label htmlFor={`select${name}`} area-label={label}>
          {label}
        </label>
        <select
          id={`select${name}`}
          name={name}
          className="form-control"
          {...multiSelect}
          onChange={changeHandler}
          value={value}
        >
          <option value="-1">Please select a value</option>
          {values.map((option, i) => (
            <option value={option} key={`option${i}${option}`}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  config: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default Select;
