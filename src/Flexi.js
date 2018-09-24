import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input, Select, Button, TextArea } from "./components/FormElements";

class Flexi extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  renderFields(config) {
    const inputTypes = new Set(["TextField", "Password", "Email", "Phone"]);
    const buttonTypes = new Set(["Submit", "Button"]);
    return config.map((field, i) => {
      if (inputTypes.has(field.type)) {
        return (
          <React.Fragment key={`RFInput${i}`}>
            <Input
              key={`Input${i}`}
              config={field}
              changeHandler={this.handleChange}
              value={this.state[field.name] || ""}
            />
            {field.children && field.children.length
              ? this.renderFields(field.children)
              : null}
          </React.Fragment>
        );
      } else if (buttonTypes.has(field.type)) {
        return <Button key={`Button${i}`} config={field} />;
      } else if (field.type === "DropDown") {
        return (
          <React.Fragment key={`RFSelect${i}`}>
            <Select
              key={`Select${i}`}
              config={field}
              changeHandler={this.handleChange}
              value={this.state[field.name] || " "}
            />
            {field.children && field.children.length
              ? this.renderFields(field.children)
              : null}
          </React.Fragment>
        );
      } else if (field.type === "TextArea") {
        return (
          <React.Fragment key={`RFTextArea${i}`}>
            <TextArea
              key={`TextArea${i}`}
              config={field}
              changeHandler={this.handleChange}
              value={this.state[field.name] || ""}
            />
            {field.children && field.children.length
              ? this.renderFields(field.children)
              : null}
          </React.Fragment>
        );
      }
      return null;
    });
  }

  render() {
    const { config } = this.props;
    const submitButtom = [
      {
        type: "Submit",
        value: "Submit",
        name: "form_submit"
      }
    ];
    return (
      <form method="POST" onSubmit={this.handleSubmit}>
        {this.renderFields([...config, ...submitButtom])}
      </form>
    );
  }
}

Flexi.propTypes = {
  config: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Flexi;
