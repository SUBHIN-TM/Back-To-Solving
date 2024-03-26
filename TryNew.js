const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3

const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.a = 3;
console.log(original); // Output: 2
console.log(shallowCopy);


const _ = require('lodash');
const original = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original);

deepCopy.b.c = 3;
console.log(original.b.c); // Output: 2
