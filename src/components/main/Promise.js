function asyncThing(callback) {
    // 비동기를 표현하기 위해 setTimeout 함수를 사용 
    window.setTimeout(function () {
        callback()
    }, 3000);

}

function _promise(param) {
    return new Promise((resolve, reject) => {
        window.setTimeout(function () {
            if (param) {
                console.log('첫번째 Promise 완료')
                resolve('해결 완료')
            } else {
                reject(Error('실패!!'))
            }

        }, Math.random() * 20000 + 1000);

    })
}

var promise2 = new Promise(function (resolve, reject) {

    // 비동기를 표현하기 위해 setTimeout 함수를 사용 
    window.setTimeout(function () {

        // 해결됨 
        console.log("두번째 Promise 완료");
        resolve("222222");

    }, Math.random() * 10000 + 1000);
});

// asyncThing(() => console.log('To it!!!!!!!!!!!!!!'))
// _promise(true)
//     .then(data => {
//         return _promise(true)
//     }).then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
Promise.all([_promise(true), promise2]).then(function (values) {
    console.log("모두 완료됨", values);
});