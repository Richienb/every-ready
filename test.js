import test from "ava"
import EveryReady from "."

test("main", async (t) => {
    const evReady = new EveryReady(2)
    t.false(evReady.ready)

    evReady.readiness[0] = true
    t.false(evReady.ready)

    evReady.readiness[1] = true
    t.true(evReady.ready)

    await evReady.when().then(() => t.true(evReady.ready))
})
