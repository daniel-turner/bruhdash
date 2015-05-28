var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(inArray,chunkSize){
    var chunkedArray = [];

    while(inArray.length > 0) {

      chunkedArray.push(inArray.splice(0,chunkSize));
    }

    return chunkedArray;
  },

  compact: function(array) {

    var isTruthy = function(value) {

      return Boolean(value);
    };

    return array.filter(isTruthy);

  },

  difference: function() {

  },

  drop: function(){

  },

  dropRight: function() {

  },

  fill: function() {

  },

  first: function () {

  },

  indexOf: function () {

  },

  inital: function () {

  },

  last: function () {

  },

  lastIndexof: function () {

  },

  pull: function () {

  },

  pullAt: function () {

  },

  rest: function () {

  },

  slice: function () {

  },

  take: function () {

  },

  takeRight: function () {

  },

  zip: function () {

  },

  unzip: function () {

  },

  without: function() {

  }
};