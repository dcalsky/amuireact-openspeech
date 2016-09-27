import React, {Component} from 'react';

class Controller extends Component {
  render() {
    return (
      <div>
        volume: 0
      </div>
    );
  }
}
Controller.ComponentName = 'Controller';
Controller.protoTypes = {
  volume: React.PropTypes.number.isRequired // volume of wav player, 0 ~ 100
};
Controller.defaultProps = {
  volume: 0
};
export default Controller;