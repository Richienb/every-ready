# Every ready [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/every-ready/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/every-ready)

A promise that resolves when multiple values are set.

[![NPM Badge](https://nodei.co/npm/every-ready.png)](https://npmjs.com/package/every-ready)

## Install

```sh
npm install every-ready
```

## Usage

```js
const EveryReady = require("every-ready");
const evReady = new EveryReady(2);

evReady.readiness[0] = true;
evReady.ready;
// false

evReady.readiness[1] = true;
evReady.ready;
// true
```

## API

### class EveryReady(expect) extends [WheneverReady](https://github.com/Richienb/whenever-ready#instance-wheneverready)

#### expect

Type: `number`

The amount of values that must be truthy.

### instance EveryReady

#### readiness

Type: `array`

The readiness values to set.

#### ready

See [WheneverReady docs](https://github.com/Richienb/whenever-ready#ready-1).

#### when()

See [WheneverReady docs](https://github.com/Richienb/whenever-ready#when).
