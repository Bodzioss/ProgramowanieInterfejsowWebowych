import React, { PureComponent } from "react";
import PropTypes from "prop-types"

import GroupResultRow from "./GroupResultRow.js";
import "./GroupResultRow.css";

export default class GroupResults extends PureComponent {
    static propTypes = {
        groupData: PropTypes.array
      };
    

  render() {
    return (
      <div className="component-group-results">
        {this.props.groupData.map(groupData => (
          <GroupResultRow
            key={groupData.title}
            title={groupData.title}
            currentNumber={groupData.currentNumber}
            maxNumber={groupData.maxNumber}
            description={groupData.description}
          />
        ))}
      </div>
    );
  }
}
