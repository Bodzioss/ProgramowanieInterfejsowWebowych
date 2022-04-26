import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles/InputData.css"

export default class InputData extends PureComponent {

  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}