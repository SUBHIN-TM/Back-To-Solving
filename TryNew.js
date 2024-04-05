// const original = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...original };

// shallowCopy.b.c = 3;
// console.log(original.b.c); // Output: 3

// const original = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...original };

// shallowCopy.a = 3;
// console.log(original); // Output: 2
// console.log(shallowCopy);


// const _ = require('lodash');
// const original = { a: 1, b: { c: 2 } };
// const deepCopy = _.cloneDeep(original);

// deepCopy.b.c = 3;
// console.log(original.b.c); // Output: 2


// let promise=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         try { 
//             setTimeout(()=>{
//                 let sum=a+b
//                 resolve({sum: sum, double: sum*2})
//                 },2000)

//         } catch (error) {
//             reject(error)
//         }
//     })
// }


// let result=async ()=>{
//    let result=await promise(10,20)
//    console.log(result);
// } 

// result()


// function A(a) {
//   return  function B(b) {
//         return function C(c) {
//             console.log(a + b + c);
//         }
//     }
// }

//  A(10)(20)(30)


// let result=(a,b,callback)=>{
//   return callback(a,b)
// }

// let sum=(a,b)=>{
//    return a+b
// }


// let out =result(1,2,sum)
// console.log(out);


// // Function to simulate a delay
// function delay(callback) {
//     setTimeout(() => {
//         console.log("Delay completed.");
//         callback();
//     }, 2000); // 2-second delay
// }

// // Callback function
// function callbackFunction() {
//     console.log("Callback executed.");
// }

// // Call the delay function with the callback
// console.log("Start delay...");
// delay(callbackFunction);
// console.log("End of script.");



// function main(cb){
//     setTimeout(()=>{
//         let a=10
//         let b=20
//         let re= cb(a,b)
//         console.log(re); // Log the result inside the setTimeout callback
//     },5000)
// }

// function sum(a,b){
//     return a+b
// }

// main(sum);


// function pascalsTriangle(rows) {
//     let triangle = "";
//     for (let i = 0; i < rows; i++) {
//         let number = 1;
//         let row = "";
//         for (let j = 0; j <= i; j++) {
//             row += number + " ";
//             number = number * (i - j) / (j + 1);
//         }
//         let spaces = " ".repeat((rows - i - 1) ); // Adjust spacing for alignment
//         triangle += spaces + row.trim() + "\n";
//     }
//     return triangle;
// }

// console.log(pascalsTriangle(8));



function triangle(rowCount){
  
for(let i=0; i<rowCount;i++){   
    let print=""
    let spaces=""
    spaces +=" ".repeat(rowCount-i)
    let number=1
    for(let j=0;j<=i;j++){
        print +=number+" "
        number = number * (i - j) / (j + 1);
    }
    console.log(spaces,print);
}

}


triangle(8)