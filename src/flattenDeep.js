// @flow
module.exports = function flattenDeep(array: mixed[]) {
    const result = [];
    const nodes = array.slice();
    let node;

    if (!array.length) {
        return result;
    }

    node = nodes.pop();

    do {
        if (node instanceof Array) {
            let index = -1;
            const length = node.length;
            const offset = nodes.length;

            while (++index < length) {
                nodes[offset + index] = node[index];
            }
        } else {
            result[result.length] = node;
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    let tmp;
    let i = -1;
    const upper = result.length / 2;
    const length = result.length;
    while (++i < upper) {
        tmp = result[i];
        result[i] = result[length - i - 1];
        result[length - i - 1] = tmp;
    }
    return result;
};
