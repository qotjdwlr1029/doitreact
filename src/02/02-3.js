/*
var array1 = ['one','two'];
var array2 = ['three','four'];
var combined = [array1[0],array1[1],array2[0],array2[1]];
//combined = array1.concat(array2);
//combined = [].concat(array1,array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
function func(){
    var args = Array.prototype.slice.call(arguments);
    var a = args[0];
    var others = args.slice(1, args.length);

    console.log(a);
    console.log(others);
}
*/

var array1 = ['one','two'];
var array2 = ['three','four'];
var combined = [...array1, ...array2];
const [ first, second, three = 'empty', ...others ] = array1;
function func(...args) { var [first, ...others] = args; }


console.log(array1);
console.log(array2);
console.log(combined);
console.log(first);
console.log(second);
console.log(three);
func(combined);