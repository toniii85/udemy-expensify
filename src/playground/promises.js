const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "toni",
      age: 33,

    });
    // reject("something wrong");
  }, 5000);
});

console.log("before");

promise.then((data) => {
  console.log("1", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this is my other promise");
    }, 5000);
  });;
}).then((str) => {
  console.log("does this run??", str);
}).catch((error) => {
  console.log(error);
});

console.log("after");