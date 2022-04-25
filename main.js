function runProgram(input) {
    var str = input;
    divide(str);
 }  // abcxyz, abcdxyz 7/2 3
   //  abc xyz => cbazyx,  abc d xyz=>cbadzyx
 function divide(str){
     var half = parseInt(str.length/2) // 3
     var bag = "";
     for(let i=half-1;i>=0;i--){ //
         bag+=str[i];
     }
     
     if(str.length%2==0){
      for(let i=str.length-1;i>=half;i--){ // 6 5 4 3
         bag+=str[i]; // cba
      }                            // abcdxyz
     }else{
         bag+=str[half];    //---d
        for(let i=str.length-1;i>half;i--){ //----zyx 
         bag+=str[i];
      } 
     }
     
     console.log(bag);
     
 }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
 