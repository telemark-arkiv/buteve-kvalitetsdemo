'use strict';

var checkWcag = require('./checkWcag');
var sites = require('./sites.json');

console.log('The collector is collecting');

sites.forEach(function(site){
  checkWcag(site, function(error, message) {
    if (error) {
      console.error(error);
    } else {
      console.log(message);
    }
  });
});