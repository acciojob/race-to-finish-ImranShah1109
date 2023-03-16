window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Could not resolve promise 2");
    resolve("Promise 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 4000);
});

let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Could not resolve promise 2");
    resolve("Promise 2");
  }, 5000);
});

promises.push(promise1);
promises.push(promise2);
promises.push(promise3);
promises.push(promise4);
promises.push(promise5);

let output = document.getElementById('output');

Promise.any(promises).then((data) => {
	output.innerHtml = data;
});


