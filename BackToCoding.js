let array = [-1, 2, -3, 4, -5, 6, -7,5];
let smallest=Infinity
let secondSmallest=Infinity
for(let i=0;i<array.length;i++){
    if(array[i]<smallest){
        secondSmallest=smallest
        smallest=array[i]
    }else if(array[i]>smallest && array[i]<secondSmallest){
        secondSmallest=array[i]
    }
}

console.log(secondSmallest)