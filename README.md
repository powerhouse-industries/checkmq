# checkMQ

[![Build Status](https://travis-ci.org/jonnyhaynes/checkmq.svg?branch=master)](https://travis-ci.org/jonnyhaynes/checkmq) [![Code Climate](https://codeclimate.com/github/jonnyhaynes/checkmq/badges/gpa.svg)](https://codeclimate.com/github/jonnyhaynes/checkmq) [![Bower](https://img.shields.io/bower/v/checkmq.svg)](https://github.com/jonnyhaynes/checkmq) [![Dependency Status](https://david-dm.org/jonnyhaynes/checkmq.svg)](https://david-dm.org/jonnyhaynes/checkmq) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jonnyhaynes/checkmq?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This project uses [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) event listeners to provide you with access to media queries in Javascript as you would in CSS.

## Usage

First you need to add your function to the checkMQ `theFunctions` array like so:

```javascript
checkMQ.addFunction(myFunction);
```

**N.B.** This is best done in some form of document ready

Then you can check against your specified media queries in your function like so:

```javascript
var myFunction = function(theMQ) {

  var whichMQ;

  if (theMQ === 'mqCore') {
    // functions for core media query
    whichMQ = 'mqCore';
  } else if (theMQ === 'mq600') {
    // functions for the 600 media query
    whichMQ = 'mq600';
  } else if ((theMQ == 'mq960') || (theMQ == 'mq1200')) {
    // functions for the 960 and 1200 media queries
    whichMQ = 'mq960 & mq1200';
  }

  return whichMQ;
}
```

## Bower

If you're using Bower to manage your front-end dependencies you can include this plugin as a component. Include "checkmq": "1.1.0" in your bower.json file and run bower install.

## Browser support

* Internet Explorer 10+
* Firefox 10+
* Chrome 9+
* Safari 5.1+
* Opera 12.1+

For support in IE 9 you can use [Weblinc's Media.match Polyfill](https://github.com/weblinc/media-match).

## Changelog

* 18/03/15: 1.1.0 - Fixing missing brack on doc ready function and bumping version number to account for rewritten code
* 18/03/15: 1.0.6 – Removing forEach method and using a 'for' loop as it's replacement for wider browser support
* 16/03/15: 1.0.5 – Updating README
* 13/03/15: 1.0.4 – Fixing broken module code
* 13/03/15: 1.0.3 – Fixing package.json
* 13/03/15: 1.0.2 – Code tidy up to fix Travis issues
* 13/03/15: 1.0.0 – First major release: registered as a Bower plugin.
