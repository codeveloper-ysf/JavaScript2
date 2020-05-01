let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/* in first line a is defined with let parameter variable that means a's value is changable.
in function a's value is changed as 12 and when we call the x function, it will show an alert message which includes a value "12" */