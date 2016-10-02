import React, {Component} from 'react';
import OpenSpeech from '../../../../dist/amuireact-openspeech.js';
import md5 from 'blueimp-md5';

const config = {
  username: 'dcalsky',
  appid: '57d92267',
  timestamp: new Date().toLocaleTimeString(),
  expires: 10000,
  secretKey: '8c1a6677637f2680'
};

config.signature = md5(config.appid + '&' + config.timestamp + '&' + config.expires.toString() + '&' + config.secretKey);

class Landing extends Component {
  state = {
    enable: false,
    result: null,
    volume: 0
  }
  constructor(props) {
    super(props)
  }
  toggleLisiten() {
    this.setState({enable: !this.state.enable})
  }
  getResult(err, result) {
    this.setState({
      result: result,
      enable: false
    });
    console.log('结果: ' + result);
  }
  getMessage(message) {
    console.log('服务消息: ' + message);
  }
  getVolume(v) {
    console.log('当前音量为: ' + v)
  }
  render() {
    return (
      <div>
          <p>结果: {this.state.result}</p>
          <div className="container">
            <button onClick={::this.toggleLisiten}>{this.state.enable ? 'Stop' : 'Start'}</button>
            <OpenSpeech
              enable={this.state.enable} 
              username={config.username}
              appid={config.appid}
              signature={config.signature}
              timestamp={config.timestamp}
              expires={config.expires}
              reconnection={true} 
              resultType="plain"
              getVolume={::this.getVolume}
              getResult={::this.getResult}
              getCurrentMessage={::this.getMessage}
              recorderPath="./lib/recorderWorker.js"
              speexWorkerPath="./lib/speex.js"
              vadPath="./lib/vad.js"
            />
          </div>
      </div>
    )
  }
}

export default Landing
