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
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse();
    return result;
};
