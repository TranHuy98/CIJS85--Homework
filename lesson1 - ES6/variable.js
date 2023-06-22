/*
let const var

    -giong: khai bao bien

    -khac:
     + scope:
        -let, cosnt -> block scope
        -var -> global scope, function scope
    + hoisting
        - var co co che hoisting
        - let const ko co hoisting
    + reassign - gan lai gia tri cho bien
        -let, var co the gan lai gia tri moi cho bien
        -const khong the reassign

*/

// demo block
// {
//     {
//         let b = 10;
//         var a = 12;
//     }
//     console.log(a);
//     console.log(b);
    
// }


/*
 terminal command

 ls - list system

 cd - change directory

 node tenfile -  chay file

 */

 //demo hoisting

 function greet(){
    const isMale = true;
    let name1 = "May";

    console.log(name);
    var name = "Peter"; //Bien name dang dc hoisting, dua len dau, var name; -> name co gia tri la undefined.

    if(isMale){
        console.log(`Hi bro`, name);
    }
    else{
        console.log(`Hi sis`);
    }
 }

 //Best practices: su dung const nhieu nhat co the