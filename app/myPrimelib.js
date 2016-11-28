var confirmPrimes = function(n){
 var isPrime = [];
 if (n < 2 ){
   return false;
 }
 for(var i=2; i<n; i++) {
   if (n%i === 0 ){
     isPrime.push(i);
   }
 }
 return isPrime.length === 0;
};

var getPrimes = function(n){
 var primes = [];
 for(var i=1; i<=n; i++){
   if(confirmPrimes(i)){
     primes.push(i);
   }
 }
 return primes;
};
module.exports = getPrimes;
