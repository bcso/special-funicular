var React = require('react');

class UsersMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

module.exports = UsersMessage;