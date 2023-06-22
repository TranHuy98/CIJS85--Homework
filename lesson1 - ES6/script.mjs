import {sum} from './helpers.mjs';

sum(4,6);

import {num} from './helpers.mjs';



console.log(sum(num,6));

import hocSinh from './helpers.mjs';

console.log(hocSinh);

///cac cach copy mang

const numbers = [1,2,3];

// const nums = number; - dung chung o nho

//dung spread operator

// const nums = [...numbers];
// numbers[1] = 20;
// console.log(nums);

//dung map()

console.log(`map()`);

const nums = numbers.map((n,i) =>{
    console.log(`n: ${n}`);
    console.log(`i: ${i}`);
    return n*3;
    //ko return se tra ve undefined
});

console.log(nums);

//n la value, i la index cua phan tu dang duoc duyet den



//ham filter

const evenNums = numbers.filter((n) => n % 2 == 0);

console.log(evenNums);

