const Suite = require("benchmark").Suite;
const flattenDeep = require("../lib/flattenDeep");
const _ = require("lodash");
const Random = require("random-js");
const random = new Random(Random.engines.mt19937().autoSeed());

function generateIntArray(length, depthThreshold, typeGen) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        if (random.realZeroToOneInclusive() < depthThreshold) {
            arr.push(typeGen());
        } else {
            const n = random.integer(0, length);
            arr.push(generateIntArray(n));
            i += n;
        }
    }
    return arr;
}

const testCases = [
    {
        description: "multiple types, deep, short",
        input: [10, 5, [30], ["a", ["b", ["c"], "d"], 5, true, [false, false, true]]]
    },
    {
        description: "integers, very deep, long",
        input: generateIntArray(1000, 0.5, function () {return random.integer(0, 100000)})
    },
    {
        description: "integers, deep, very long",
        input: generateIntArray(10000, 0.1, function () {return random.integer(0, 100000)})
    },
    {
        description: "multiple types, deep, very long",
        input: generateIntArray(10000, 0.1, function () {
            if (random.bool()) {
                return random.integer(0, 1000);
            } else {
                return random.string(2);
            }
        })
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

    console.log("Test Case:", testCase.description);
    suite.run();
    console.log("\n\n");
}