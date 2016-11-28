import React from 'react';
/**
 * @class OpenspeechRecorder
 * @props
 */

const OpenspeechRecorder = React.createClass({
  propTypes: {
    signature: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    enable: React.PropTypes.bool.isRequired, // component state of running
    appid: React.PropTypes.string.isRequired, // your private app id
    timestamp: React.PropTypes.string.isRequired, // As same as the timestamp of signature
    expires: React.PropTypes.number.isRequired, // As same as the expires of signature
    url: React.PropTypes.string, // Server address
    reconnection: React.PropTypes.bool, // Whether client support reconnection after disconnecting
    resultType: React.PropTypes.string, // Format for result: json or plain
    resultCharset: React.PropTypes.string, // Format of result charset
    punctuationType: React.PropTypes.number, // Whether result includes punctuation marks
    getVolume: React.PropTypes.func, // A callback function to get the current volume
    getResult: React.PropTypes.func, // A callback function to get the result from server
    getCurrentMessage: React.PropTypes.func, // A callback function to get the current status
    vadPath: React.PropTypes.string, //
    recorderPath: React.PropTypes.string,
    speexWorkerPath: React.PropTypes.string,
  },
  getDefaultProps () {
    return {
      enable: false,
      expires: 10000, // A day
      url: 'http://webapi.openspeech.cn/',
      reconnection: true,
      resultType: 'json',
      resultCharset: 'utf8',
      punctuationType: 1, // the default result has punctuation marks
      getVolume(volume) {
      },
      getResult(err, result) {
      },
      getCurrentMessage(message) {
      }
    };
  },
  componentWillReceiveProps(nextProps, prevProps) {
    const enable = nextProps.enable !== prevProps.enable && nextProps.enable;
    if (enable) {
      this._handleStartListen();
    } else {
      this._handleStopListen();
    }
  },
  componentWillUpdate (nextProps, nextState) {
    if (!this.state.enable && nextState.enable) {
      this._initSession();
    }
  },
  getInitialState() {
    return {
      loadCompleted: false,
      session: null,
      ssbParam: {},
      result: null
    }
  },
  _initSession() {
    let session = new IFlyIatSession({
      'url': this.props.url,
      'reconnection': this.props.reconnection,
      'reconnectionDelay': 30000,
      'compress': 'speex',
      'vad_path': this.props.vadPath,
      'recorder_path': this.props.recorderPath,
      'speex_path': this.props.speexWorkerPath
    });
    // const signature = md5(this.props.appid + '&' + this.props.timestamp + '&' + this.props.expires.toString() + '&' + this.props.secretKey);
    this.setState({
      loadCompleted: true,
      ssbParam: {
        "grammar_list": null,
        "params": "aue=speex-wb;-1, usr = " + this.props.username + ", ssm = 1, sub = iat, net_type = wifi, rse = "
        + this.props.resultCharset + ", ent =sms16k, rst = " + this.props.resultType
        + ", auf  = audio/L16;rate=16000, vad_enable = 1, vad_timeout = 5000, vad_speech_tail = 500, compress = igzip, caller.appid = "
        + this.props.appid + ", timestamp = " + this.props.timestamp + ", expires = " + this.props.expires.toString(),
        "signature": this.props.signature
      }
    });
    this.setState({session: session});
  },
  componentWillMount() {
    if (IFlyIatSession === undefined) {
      this.setState({loadCompleted: false});
      throw ('Not loading correct the Openspeech modules!');
    }

    if (!this.props.vadPath || !this.props.recorderPath || !this.props.speexWorkerPath) {
      throw ('Not setting url of compress libs!');
    }
    this._initSession();
  },
  _getMessage(message) {
    if (message === 'onEnd') {
      this.setState({enable: false});
    }
    this.props.getCurrentMessage(message)
  },
  _handleStartListen() {
    this.state.session.start(this.state.ssbParam, this.props.getVolume, this.props.getResult, this.props.getCurrentMessage);
  },
  _handleStopListen() {
    this.state.session.stop();
  },
  render() {
    const {
      style
    } = this.props;

    return (
      <div className="am-openspeech-recorder" style={style}>
        {this.props.children}
      </div>
    );
  }
});

export default OpenspeechRecorder
