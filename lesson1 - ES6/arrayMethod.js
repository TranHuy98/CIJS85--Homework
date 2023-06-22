//map
//filter
//find
//findIndex
//some
//every
//reduce


const nums = [1,10,100,15,7];

//Demo map

const doubleNum = nums.map((num) => num*2);

//neu ko return se tra ve 1 mang full gia tri undefined

// const doubleNum = [];

// for(let i=0;i<nums.length;i++){

//     db = nums[i]*2;
//     doubleNum.push(db);
// }

console.log(doubleNum);


//Demo filter

// const oddNum = nums.filter((num) => {
//     if(num%2!=0){
//         return true;
//     }
// });

const oddNum = nums.filter((num) => num % 2 === 1);

console.log(oddNum);