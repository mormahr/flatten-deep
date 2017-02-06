import flattenDeep from "../flattenDeep"

describe("flattenDeep", () => {
    it("returns a non nested array as is", () => {
        expect(flattenDeep([5, "a"])).toEqual([5, "a"]);
    });

    it("flattens a one level nested array", () => {
        expect(flattenDeep([5, "a", [3, 2]])).toEqual([5, "a", 3, 2]);
    });

    it("flattens a two level nested array", () => {
        expect(flattenDeep([5, "a", [3, [2]]])).toEqual([5, "a", 3, 2]);
    });
});
