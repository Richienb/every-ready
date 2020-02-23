"use strict"

const WheneverReady = require("whenever-ready")
const onChange = require("on-change")

module.exports = class EveryReady extends WheneverReady {
    constructor(expect) {
        super()
        this.readiness = onChange(new Array(expect).fill(false), () => {
            super.ready = this.readiness.every((val) => val)
        })
    }
}
