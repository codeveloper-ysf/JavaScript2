const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/* const only provides invariance between the identifier and the value, that is, it can not be reassigned to the defined variable. 
however, the assigned object can still be modified. in javascript, primitive types (number, string, boolean, null, undefined) are immutable 
and non-primitive types (object(array, date, regex), function) are mutable. that's why in f1 function x's value can not be changed 
but in f2 function x's value can be changed. */