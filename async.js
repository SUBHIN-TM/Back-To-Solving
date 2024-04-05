let timer=((cb)=>{
    setTimeout(()=>{
     cb(20)
    },2000)
})

// let prints=(X)=>{
//     console.log(X)
// }

timer((x)=>{
    console.log(x);
})

// let timers=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(20);
//         }, 3000);
//     });
// }

// timers().then((result) => {
//     console.log(result);
// });