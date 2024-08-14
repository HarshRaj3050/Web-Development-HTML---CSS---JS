// CallBack Function

function great(n, callback) {
    console.log(`hi ${n}`);
    callback();
}

function callMe() {
    console.log(`I am callback function`);
}

great("Harsh", callMe)