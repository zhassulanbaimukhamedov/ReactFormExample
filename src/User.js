import React from "react";
export default class User extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}
