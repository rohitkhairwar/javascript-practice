

// const newProm = new Promise (resolve, reject) {
// resolve(print(i))
// };

function printer() {
    for (var i = 1; i <= 10; i++) {
        const printerPromise = new Promise (function(resolve, reject) {
            resolve(() => {
                for(let j = i; j < i + 2; j++) {
                    print(j);
                }
            });
        });
        printerPromise.then(print(i));
    }
    
}

// const test = async (num) => {
//     printer(num);
//     return;
// }

function print(i) {
    console.log(i);
}

printer();


/*

2
1
5
4
3
6
7
10
9
8

*/
