"use strict"

const WheneverReady = require("whenever-ready")
const onChange = require("on-change")
const _ = require("lodash")
const replaceArrayItems = require("replace-array-items")

module.exports = class EveryReady extends WheneverReady {
    constructor(expect) {
        super()
        this.readiness = onChange(replaceArrayItems(new Array(expect), false), () => {
            super.ready = _.every(this.readiness)
        })
    }
}
