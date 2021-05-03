import React, { Component } from "react";

class DynamicSelect extends Component {
  constructor() {
    super();
    this.onChangeUser = this.onChangeUser.bind(this);
  }

  onChangeUser(event) {
    console.log(event.target.value);
  }

  render() {
    const { users } = this.props;
    
    return (
      <div>
        This is dynamic select element demo
        <div>
          <span>Select user</span> :
          {users && users.length > 0 && (
            <div>
              /* Adding dynamic select element */
              <select onChange={this.onChangeUser}>
                {users.map((user, index) => {
                  return <option>{user.email}</option>;
                })}
              </select>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DynamicSelect;

