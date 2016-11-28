(function(){
  var chai = require('chai');
  var expect = chai.expect;
  var getPrimes = require('../app/myPrimelib.js');
  
describe("Case that take in integer value", function() {

  		 it("should return [2,3, 5, 7, 11,13] for prime number from 0 to n", function() {
    		expect(getPrimes(15)).to.eql([2,3, 5, 7, 11,13])
		})
 		 it("should return [2,3, 5, 7, 11, 13, 17, 19] for prime number from 0 to n", function() {
   			 expect(getPrimes(20)).to.eql([ 2,3,5, 7, 11, 13, 17, 19])
		})
 	 });
 })();