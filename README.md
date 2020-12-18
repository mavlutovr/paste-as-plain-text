# paste-as-plain-text

Switches a html contenteditable element to "paste as plain text only" mode.

![](https://i.imgur.com/sRmZd6R.gif)

## Demo

https://webdeveloper.pro/demo/paste-as-plain-text/demo.html

## Install

```shell
npm install paste-as-plain-text --save
```

## Setup

```javascript
import pasteAsPlainText from 'paste-as-plain-text';
```

## Usage

```html
<div id="js-textarea" contenteditable="true"></div>
```

```javascript
pasteAsPlainText(
	document.getElementById('js-textarea')
);
```

## License

MIT

