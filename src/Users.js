import React from "react";
import User from "./User";
export default class Users extends React.Component {
  render() {
    if (this.props.users.length > 0) {
      return (
        <div>
          <h4>Users</h4>

          <div>
            {this.props.users.map((u) => (
              <User key={u.id} user={u} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>No users</div>;
    }
  }
}
