// 1. Khai báo biến hàm
let message = 'Hello world';
let number = 1;
let number2 = 2.1;
console.log(message);
console.log(number);
console.log(number2);

// 2. Sử dụng if/else switch/case

// false ~ 0, null, undefined, NaN, false
// true ~ else
let name = 'nguyen the linh';
if (name.length > 20){
    console.log ('Name too long ' + name);
} else if (name.length < 20) {
    console.log('Name short ' + name);
    
}

// 3. Vong lặp ( for , while, do/while )

let arr =[ 1, 2, 3];

let i = 0;
while(i<arr.length){
    let number = arr[i];
    console.log(number);
    i++;
    
}