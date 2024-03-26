// * 1 .FIND THE AVERAGE SALARY OF EACH CORRESPONDING DEPARTMENT ,STUDIED ABOUT OBJECT KEYS AND VALUES IN IT
//!METHOD -1
let firm = [
    { name: 'subhin', dept: 'hr', salary: 20 },
    { name: 'subhin', dept: 'manager', salary: 20 },
    { name: 'subhin', dept: 'hr', salary: 20 },
    { name: 'subhin', dept: 'sales', salary: 20 },
    { name: 'subhin', dept: 'sales', salary: 20 },
]
let result = {}
firm.map((data) => {
    for (let key in data) {
        if (key == "dept") {
            if (result[data[key]]) {
                result[data[key]].push(data.salary)
            } else {
                result[data[key]] = [data.salary]
            }
        }
    }
})
console.log(result)

let average = (array) => {
    return array.reduce((acc, data) => acc + data, 0) / array.length
}
for (let key in result) {
    result[key] = average(result[key])
}
console.log(result)
console.log(Object.keys(result))  //IT WILL RETURN AS AN ARRAY WITH ALL KEYS OF THAT OBJECT
console.log(Object.values(result)) //IT WILL RETURN AS AN ARRAY WITH ALL VALUES OF THAT OBJECT


//! METHOD 2
let firmS = [
    { name: 'subhin', dept: 'hr', salary: 20 },
    { name: 'subhin', dept: 'manager', salary: 20 },
    { name: 'subhin', dept: 'hr', salary: 20 },
    { name: 'subhin', dept: 'sales', salary: 20 },
    { name: 'subhin', dept: 'sales', salary: 20 },
]
let finals={}
firmS.map((data) =>{
    if(!finals[data.dept]){
        finals[data.dept]={totalSalary:data.salary,count:1}
    }else{
        finals[data.dept].totalSalary +=data.salary
        finals[data.dept].count +=1
    }
})
console.log(finals);
for(let key in finals){
    finals[key]= finals[key].totalSalary/ finals[key].count
}
console.log(finals);







// * 2. ADD NEW KEYS IF IT EXIST REPLACE VALUE OR ELSE ADD NEW KEY AND VALUES
let firstOb={name:"subhin",age:30,place:"kozhikode"}
let modified={...firstOb,name:"karthik",places:"kerala"}
console.log(modified)






//* 3.HELLO SLICING
//! METHOD-1
const array="hello"
array.split("").forEach((data,index)=>{
let char=array.split("")
char[index]=char[index].toUpperCase()
console.log(char.join(""))
})

//! METHOD-2
array.split("").forEach((data,index)=>{
    let replaced=data.toUpperCase()
    let spliced=array.split("")
    console.log(spliced);
    spliced.splice(index,1,replaced);//1 WILL INDICATE REPLACE ,0 WILL INDICATE ADD IN THAT POSITION,3RD PARAMETER WHAT ARE THE ELEMETNS TO ADD OR REPLACE
    console.log(spliced);
})




//* 4.return even length word as same for odd return 00
let words="there is so many fools in this room"
let results=""
words.split(" ").map((data)=> {
    if(data.length%2==0){
        results +=data+" "
    }else{
        results +="00"+" "
    }
})
console.log(results)





//* FIND THE LEADER WHENEVER THE RIGHT SIDE NUMBERS ARE SAMLLER THAN LEFT THE LEFT ONE IS LEADER
let aray=[13,14,13,12,8,1,11,3,8,2]
let Results=[]
for(let i=0;i<aray.length-1;i++){
    let count=0;
    for(let j=i+1;j<aray.length-1;j++){
        if(aray[i]<aray[j]){
          count ++
          break
        }
    }
    if(count==0){
        Results.push(aray[i])
    }
}
console.log(Results)



//* CHECK GIVEN STRING IS PALINDROME OR NOT 
function pali(word){
    if(word.length<=1){
        return console.log("it is palindrome")
    }
    if(word[0] != word[word.length-1]){
        return console.log("It is not palindrome")
    }
}

pali("amma")
