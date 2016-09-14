import React from 'react';
import classNames from 'classnames';
/**
 * 类说明
 * @class Openspeech
 * @constructor
 * @props
 */

const Openspeech = React.createClass({
  propTypes: {
    enable: React.PropTypes.bool.required, // component state of running
    appid: React.PropTypes.string.required, // your private app id
    timestamp: React.PropTypes.any, // time stamp
    expires: React.PropTypes.number, // expires
    secretKey: React.PropTypes.string.required, // your secret key
    url: React.PropTypes.string, // server address
    compress: React.PropTypes.string, // voice compress algorithm
    reconnection: React.PropTypes.bool, // whether client support reconnection after disconnecting
    resultType: React.PropTypes.string, // format for result: json or plain
    resultCharset: React.PropTypes.string, // format of result charset
    engineType: React.PropTypes.string, // decide which engine to distinguish
    punctuationType: React.PropTypes.number, // whether result includes punctuation marks
    getVolume: React.PropTypes.func, // a callback function to get the current volume
    getResult: React.PropTypes.func, // a callback function to get the result from server
    getCurrentMessage: React.PropTypes.func, // a callback function to get the current status
  },
  getDefaultProps () {
    return {
      enable: false,
      timestamp: new Date().toLocaleTimeString(),
      expires: 86400, // A day
      url: 'http://webapi.openspeech.cn/',
      compress: 'speex',
      reconnection: 'true',
      resultType: 'json',
      resultCharset: 'utf8',
      engineType: 'sms16k',
      punctuationType: 1, // the default result has punctuation marks
      getVolume(volume) {},
      getResult(err, result) {},
      getCurrentMessage(message) {}
    };
  },
  componentWillReceiveProps(nextProps, prevProps) {
    const enable = nextProps.enable !== prevProps.enable && nextProps.enable;
    if(enable) {
      this._handleStartListen();
    } else {
      this._handleStopListen();
    }
  },
  componentWillUpdate (nextProps, nextState) {

  },
  getInitialState() {
    return {
      loadCompleted: false,
      session: null,
      ssbParam: {},
      result: null
    }
  },
  componentWillMount() {
    if(!IFlyIatSession) {
      this.setState({loadCompleted: false});
      throw ("Not loading correct the Openspeech modules!");
    }
    let session = new IFlyIatSession({
      'url'                : this.props.url,
      'reconnection'       : this.props.reconnection,
      'reconnectionDelay'  : 30000,
      'compress'           : this.props.compress
    });
    this.setState({
      session: session,
      loadCompleted: true,
      ssbParam: {
        "grammar_list" : null,
        "params" : "aue=speex-wb;-1, usr = mkchen, ssm = 1, sub = iat, net_type = wifi, rse = "
        + this.props.resultCharset + ", ent =" + this.props.engineType + ", rst = " + this.props.resultType
        + ", auf  = audio/L16;rate=16000, vad_enable = 1, vad_timeout = 5000, vad_speech_tail = 500, compress = igzip, caller.appid = "
        + this.props.appid + ", timestamp = " + this.props.timestamp + ", expires = " + this.props.expires,
        "signature" : "TEST SIGNATURE"
      }
    })
  },
  _handleStartListen() {
    this.state.session.start(this.state.ssbParam, this.props.getVolume, this.props.getResult, this.props.getCurrentMessage);
  },
  _handleStopListen() {
    this.state.session.stop(null);
  },
  render() {
    return (
      <div>
      </div>
    )
  }
});

export default Openspeech