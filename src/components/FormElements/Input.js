import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  renderInput(type) {
    const { config, changeHandler, value } = this.props;
    const { name, label } = config;
    return (
      <div className="form-group">
        <label htmlFor={`input${name}`} area-label={label}>
          {label}
        </label>
        <input
          id={`input${name}`}
          type={type}
          name={name}
          className="form-control"
          onChange={changeHandler}
          value={value}
        />
      </div>
    );
  }
  render() {
    const { type } = this.props.config;
    let field = null;
    switch (type) {
      case "TextField":
        field = this.renderInput("text");
        break;
      case "Password":
        field = this.renderInput("password");
        break;
      case "Email":
        field = this.renderInput("email");
        break;
      case "Phone":
        field = this.renderInput("tel");
        break;
      default:
        break;
    }
    return field;
  }
}

Input.propTypes = {
  config: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default Input;
