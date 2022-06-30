/*var objectOne = { one : 1, two : 2, other : 0 }
var objectTwo = { three : 3, four : 4, other : -1 }
var combined = {
    one : objectOne.one,
    two : objectOne.two,
    three: objectTwo.three,
    four : objectTwo.four
}
var combined1 = Object.assign({}, objectOne, objectTwo);
var combined2 = Object.assign({}, objectTwo, objectOne);
var others = Object.assign({}, combined2);

delete others.other;*/

var objectOne = { one : 1, two : 2, other : 0 }
var objectTwo = { three : 3, four : 4, other : -1 }
var combined = {
    ...objectOne,
    ...objectTwo,
};

var combined1 = {
    ...objectTwo,
    ...objectOne,
};

var { other, ...others } = combined;

console.log(objectOne);
console.log(objectTwo);
console.log(combined);
console.log(combined1);
console.log(others);