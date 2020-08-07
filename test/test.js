//var assert = require('assert');
// node go find the module called assert so I can use it. call it assert so I can use the methods and properties of it.
//describe('Array', function () {
    //describe('#indexof()', function () {
        //it('should return -1 when the value is not present', function () {
           // assert.equal([1, 2, 3].indexOf(3), -1);
        //});
    //});
//});
//this is for test our main.js



//var cubic = require('../index.js');
//const triangle = require('../triangle.js');
//for local modules use the  "../index.js" syntax
    //describe('Cubic Function'), function (){
        //it ('should return the 27 when the values 3,3,3 are passed in', function(){
            //assert.equal(cubic(3,3,3))27);
        //});
   // });

var assert = require('assert');
var area = require('../triangle.js');
    describe('Area', function () {
        it ('should return 7.5 when the values 3, 5 are passed'), function (){
            assert.equal(area(3,5)*.5, 7.5);
        };
    });
