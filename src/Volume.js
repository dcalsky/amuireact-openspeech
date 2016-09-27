import React, {Component} from 'react';
import './style/volume.css';

class Volume extends Component {
  render() {
    return (
      <div className="am-openspeech-volume">
        <span className="am-openspeech-volume _volume-0" ref="volume0_0">

        </span>
        <span className="am-openspeech-volume _volume-1" ref="volume1">

      </span>
        <span className="am-openspeech-volume _volume-0" ref="volume0_1">

      </span>
      </div>
    );
  }
}

Volume.ComponentName = 'Volume';
Volume.protoTypes = {};
Volume.defaultProps = {};

export default Volume;