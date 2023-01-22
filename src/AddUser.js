import React from "react";
export default class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div>
        <h4>AddUser</h4>
        <form>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
          <input
            type="button"
            value="AddUser"
            onClick={() =>
              this.props.onAdd({
                name: this.state.name,
              })
            }
          />
        </form>
      </div>
    );
  }
}
