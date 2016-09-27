Amuireact-openspeech
====================
The OpenSpeech component of [讯飞开放平台](http://www.xfyun.cn/) for [Amaze UI React](https://github.com/amazeui/amazeui-react)

## Demo & Examples

Live demo: [jedwatson.github.io/react-select](http://jedwatson.github.io/react-select/)

To build the example locally, clone this repo then run:

```javascript
npm install
npm start
```

Then open [`localhost:3030`](http://localhost:3030) in a browser.

## Installation
The easiest way to use amuireact-openspeech is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

```javascript
npm install react-select --save
```

At this point you can import amuireact-openspeech in your application as follows:

```js
import OpeenSpeech from 'amuireact-openspeech';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
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