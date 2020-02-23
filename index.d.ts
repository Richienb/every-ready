import WheneverReady from "whenever-ready"

/**
 * A promise that resolves when multiple values are set.
 * @example
 * ```
 * const EveryReady = require("every-ready");
 * const evReady = new EveryReady(2);
 *
 * evReady.readiness[0] = true;
 * evReady.ready;
 * //=> false
 *
 * evReady.readiness[1] = true;
 * evReady.ready;
 * //=> true
 * ```
*/
declare class EveryReady extends WheneverReady {
    /**
     * @param expect The amount of values that must be truthy.
    */
    constructor(expect: number)

    /**
    * @param readiness The readiness values to set.
    */
    public readiness: []
}

export = EveryReady
