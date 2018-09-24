import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TextArea extends PureComponent {
  render() {
    const { config, changeHandler, value } = this.props;
    const { name, label } = config;
    const rows = this.props.config.rows || 3;
    return (
      <div className="form-group">
        <label htmlFor={`textarea${name}`} area-label={label}>
          {label}
        </label>
        <textarea
          id={`textarea${name}`}
          name={name}
          className="form-control"
          onChange={changeHandler}
          rows={rows}
        >
          {value}
        </textarea>
      </div>
    );
  }
}

TextArea.propTypes = {
  config: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default TextArea;
