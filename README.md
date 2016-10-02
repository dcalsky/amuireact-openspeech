
Amuireact-openspeech
====================
The OpenSpeech component of [讯飞开放平台](http://www.xfyun.cn/) for [Amaze UI React](https://github.com/amazeui/amazeui-react)

## Feature
According to the speech of user, this component will transform speech into text which is based on the openspeech SDK.

## Live demo

demo: [amazeui-opeenspeech-example](http://demo.noddl.me)

Open the web developer tool while using demo will be better.

## Browser

![safari](https://img.shields.io/badge/safari-%E2%9C%96%EF%B8%8F-red.svg)![firefox](https://img.shields.io/badge/firefox-%E2%9C%94%EF%B8%8F-green.svg)![chrome](https://img.shields.io/badge/chrome-✔️-green.svg)

**!Note**: Whether pass the test on special browser is subject to [the official SDK](http://webapi.openspeech.cn/).

## Demo & Examples

To build the example locally, clone this repo and open example folder then run:

```javascript
cd example
npm install
npm start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

## Installation
The easiest way to use amuireact-openspeech is to install it from NPM and include it in your own React build process (using [Webpack](http://webpack.github.io), etc).

```javascript
npm install amuireact-openspeech --save
```

At this point you can import amuireact-openspeech in your application as follows:

```js
import OpeenSpeech from 'amuireact-openspeech';
```

And there are some base libraries you should import.
*(Because thinking about upgrade of the official openspeech component, this react component not includes there libs)*

```html
    <script src="http://webapi.openspeech.cn/socket.io/socket.io.js"></script>
    <script src="http://webapi.openspeech.cn/fingerprint.js"></script>
    <script src="http://webapi.openspeech.cn/iat.min.js"></script>
```

## Usages


## Further options


	Property	|	Type		|	Default		|	Description
:-----------------------|:--------------|:--------------|:--------------------------------
	timestamp	|	string	|	new Date().toLocaleTimeString()	|	As same as the time stamp of signature
  expires | number | 10000 | As same as the expires of signature
	url	|	string | 'http://webapi.openspeech.cn/' | Server address
	reconnection       |       bool    |      true        |  whether client support reconnection after disconnecting
	resultType 	|	string	|	'json'		|	Format for result: json or plain
	resultCharset  | string | 'utf8'  | Format of result charset
	punctuationType 	|	number	|	1	|	Whether result includes punctuation marks
	getVolume	|	func	|	empty function	|	A callback function to get the current volume
	getResult 	|	func	|	empty function	|	A callback function to get the result from server
	getCurrentMessage 	|	func	|	empty function		|	A callback function to get the current status