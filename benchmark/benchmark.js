const Suite = require("benchmark").Suite;
const flattenDeep = require("../lib/flattenDeep");
const _ = require("lodash");

const testCases = [
    {
        description: "multiple types, deep, short",
        input: [10, 5, [30], ["a", ["b", ["c"], "d"], 5, true, [false, false, true]]]
    }
];

testCases.forEach(runTestCase);

function runTestCase(testCase) {
    const suite = new Suite();

    suite.add("flatten-deep", function () {
        flattenDeep(testCase.input)
    });

    suite.add("_.flattenDeep", function () {
        _.flattenDeep(testCase.input)
    });

    suite.on('cycle', function(event) {
        console.log(String(event.target));
    });
    suite.on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

    console.log("###################################################################");
    console.log("Test Case:", testCase.description);
    suite.run();
}