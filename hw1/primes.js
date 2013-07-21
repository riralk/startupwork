#!/usr/bin/env node


var isPrime = function(n){
   if (n < 2) { return false; }
   var max = Math.floor(Math.sqrt(n));
// console.log("max divisor =>"+ max)
   for (i=2; i<=max; i++){
      if (n%i==0) { 
//        console.log(""+n + "is divisible by "+i);
        return false; 
      }
   }
   return true;

};


var firstkprime = function(k){
   var arr = [];
   var candidate = 1;
   while (arr.length < k){     
     while (true){
       if (isPrime(candidate)){
          arr.push(candidate);
          candidate++;
          break;
       }
       candidate++;        
     }
   }
   return arr;
};


var fmt = function(arr) {
  return arr.join(", "); 
};

var k = 100;
//console.log("firstkprime("+k+")");
//console.log(fmt(firstkprime(k)));
var fs = require('fs');
var outfile = "primes100.txt";
var out = fmt(firstkprime(k));
fs.writeFileSync(outfile, out);
console.log("Script: "+ __filename + "\nWrote: " + out + "\nTo: "+outfile );

