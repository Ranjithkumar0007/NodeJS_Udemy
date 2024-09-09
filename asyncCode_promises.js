const { text } = require("stream/consumers");

// Sync code
console.log('Sync code before timer');
console.log('Hello!!!!');

// Async code
setTimeout(() => {
    console.log('Timer is done!');
}, 2000);



const fetchData = callback => {
    setTimeout(() => {
        callback('Timer2 is done!!!');
    },1500);
};

setTimeout(() => {
    console.log('Timer1 is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);


// Promises
const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!!!!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer promise is done!');
    fetchData1()
    .then(text => {
        console.log(text);
        return fetchData1();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);