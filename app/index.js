// var inside = require('./');
var fs = require('fs');
var point = require('turf-point');
var polygon = require('turf-polygon');
var invariant = require('turf-invariant');
var inside = require('turf-inside');

var census_index = require('axh-census');
var state_index = require('axh-state');



// var lat = 40.0; 
// var lon = -74.4;
// var p = state_index(lat, lon);

console.info("Testing States");

var i = 0;
var t = 0;
var c = 5000;
var hits = 0
while(i <= c){
  i+=1;
  lat = Math.random() * 160.0 - 80;
  lon = Math.random() * 360.0 - 180;
  var start = new Date();
  var hrstart = process.hrtime();

  if (state_index(lat, lon)){
    hits+=1;
  }

  var end = new Date() - start,
      hrend = process.hrtime(hrstart);
  t+= hrend[1]/1000000;
  // console.info("Execution time: %dms", end);
  // console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
}
console.info("Execution time: %dms", t/c);
console.info("50million time: %dhrs", 50000000.0 * (t/c) / 3600);

console.info("");
console.info("Testing Census");


var i = 0;
var t = 0;
var c = 5000;
var hits = 0
while(i <= c){
  i+=1;
  lat = Math.random() * 160.0 - 80;
  lon = Math.random() * 360.0 - 180;
  var start = new Date();
  var hrstart = process.hrtime();

  if (census_index(lat, lon)){
    hits+=1;
  }

  var end = new Date() - start,
      hrend = process.hrtime(hrstart);
  t+= hrend[1]/1000000;
  // console.info("Execution time: %dms", end);
  // console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
}
console.info("Execution time: %dms", t/c);
console.info("50million time: %dhrs", 50000000.0 * (t/c) / 3600);



