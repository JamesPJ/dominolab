import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Button extends PureComponent {
  renderButton(type) {
    const { value, name } = this.props.config;
    return (
      <button name={name} type={type} className="btn btn-default" value={value}>
        {value}
      </button>
    );
  }
  render() {
    const { type } = this.props.config;
    let field = null;
    switch (type) {
      case "Submit":
        field = this.renderButton("submit");
        break;
      case "Button":
        field = this.renderButton("button");
        break;
      default:
        break;
    }
    return <div className="form-group d-flex justify-content-end">{field}</div>;
  }
}

Button.propTypes = {
  config: PropTypes.object.isRequired
};

export default Button;
