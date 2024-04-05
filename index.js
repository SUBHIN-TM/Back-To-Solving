function one(){
    let a=10
    two();  
     function two(){
      let b=20
      console.log("two");
      three();      
        function three(){ 
          console.log(a+b);
        }
    }
   
}

one()

console.log("hello");