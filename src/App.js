import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import AddUser from "./AddUser";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "User1",
        },
        {
          id: 2,
          name: "User2",
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
  }
  render() {
    return (
      <div>
        <main>
          <Users users={this.state.users} />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }
  addUser(u) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...u }] });
  }
}
