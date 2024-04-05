let row=4;
let number=0
for(let i=4;i>=1;i--){
    let space=""
    for(let j=1;j<=row-i;j++){
        space += "  "
    }
    let print=''
    for(let k=1;k<=i;k++){
        print += ++number+" "
    }
    let right=21-number
    for(let l=1;l<=i;l++ ){
        print +=right++ + ' '
    }
    console.log(space+print +'\n')
    
}


