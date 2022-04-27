import React, { PureComponent } from "react";
import PropTypes from "prop-types"

import GroupResultRow from "./GroupResultRow.js";
import "./styles/GroupResultRow.css";

export default class GroupResult extends PureComponent {
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
            subjects={groupData.subjects}
            description={groupData.description}
          />
        ))}
      </div>
    );
  }
}
