//b1

const arr1 = [1,2,4,5,6];
const arr2 = [1, 6, 8, 9, 0];

const arr3 = arr1.filter((arr) => {

    return arr2.includes(arr);
});
console.log(`Bai 1`);
console.log(arr3);


//b2

const arr = [1,54,6,7];
const newArr = arr.map(num => num+5);

console.log(`Bai 2`);
console.log(newArr);

//b3

const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];

const k = [1, 8,10,96,7];

const m1 = m.filter((arr) =>{return !(k.includes(arr))});
const n1 = n.filter((arr) =>{return !(k.includes(arr))});

console.log(`Bai 3`);
console.log(m1);
console.log(n1);

//b4
console.log(`Bai 4`);

const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },
]

const playerModified = [];

for (let player of players){
    let newID = player.id;
    let newplayer = {};
    newplayer[newID] = player;
    playerModified.push(newplayer);
}
console.log(playerModified);

//Bai 5
console.log(`Bai 5`);

import A from './module/helpers.mjs';

console.log(A);

console.log(`Gia tri trung binh mang A`);