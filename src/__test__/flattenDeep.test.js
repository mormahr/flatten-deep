import flattenDeep from "../flattenDeep"

describe("flattenDeep", () => {
    it("returns a non nested array as is", () => {
        expect(flattenDeep([5, "a"])).toEqual([5, "a"]);
    })
});
