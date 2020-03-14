const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2...');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log('result', result));

//To return as soon as the first operation is completed
Promise.race([p1, p2])
    .then(result => console.log('result', result));
