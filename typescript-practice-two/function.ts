const add = (n1: number, n2: number) => {
  return n1 + n2;
};

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const value = cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

// let value:undefined;

addAndHandle(10, 20, (a) => {
  console.log(a);
});
