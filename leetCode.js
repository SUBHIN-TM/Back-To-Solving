//MAKE LARGEST RAILWAY TIME FORM GIVEN ARRAY

function largestTime(arr){
    let numbers=[]
    for(let i=0;i<arr.length;i++){
         let zero=0;
         numbers.push((`${zero}${arr[i]}`))
        for(let j=0;j<arr.length;j++){
            numbers.push((`${arr[i]}${arr[j]}`))
        }
    }
    let unique=[...new Set(numbers)]
    console.log(unique)
    let hour=0
    let minute=0
    unique.map((data)=>{
        if(data >=hour && data<=23){
            hour=data
        }
        if(data>= minute && data<=60){
            minute=data
        }
    })
    console.log(hour)
    console.log(minute)
    console.log(`${hour}:${minute}`)
}
largestTime([6,4,5,3])