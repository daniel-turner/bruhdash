var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(inArray, chunkSize){

    if(chunkSize === undefined){

      chunkSize = 1;
    };

    if(!validArray(inArray)) {

      return undefined;
    };

    var chunkedArray = [];

    while(inArray.length > 0) {

      chunkedArray.push(inArray.splice(0,chunkSize));
    }

    return chunkedArray;
  },

  compact: function(inArray) {

    if(!validArray(inArray)) {

      return undefined;
    };

    var isTruthy = function(value) {

      return Boolean(value);
    };

    return inArray.filter(isTruthy);

  },
//rework filteredArray
  difference: function(inArray) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    var outArray = [];

    var filterArray;
    var argsCopy = Array.prototype.slice.call(arguments);

    var filterArrays = argsCopy.slice(1);

    var isPartOf = function(value) {

      if(filterArray.indexOf(value) >= 0) {

        return false;
      };

      return true;

    };

    for(var i =0;i<filterArrays.length;i++) {

      filterArray = filterArrays[i];

      if(!this.validArray(filterArray)) {

        return filterArray;
      };

      inArray = inArray.filter(isPartOf);
    };

    return inArray;

  },

  drop: function(inArray, number){

    if(!this.validArray(inArray)) {

      return undefined;
    };

    if(!Boolean(number)) {

      if(number === 0) {

        return inArray;
      };

      number = 1;
    };

    inArray.splice(0,number);

    return inArray;

  },

  dropRight: function(inArray, number) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    if(!Boolean(number)) {

      if(number === 0) {

        return inArray;
      };

      number = 1;
    };

    inArray.splice((inArray.length - number));

    return inArray;

  },

  fill: function(inArray, value, start, end) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    if(!Boolean(start)) {

      start = 0;
    };

    if(!Boolean(end)) {

      end = inArray.length;
    };

    var substitutionArray = [];

    for(var i=0;i<(end-start);i++) {

      substitutionArray.push(value);
    };

    var leftArray = inArray.slice(0,start);
    var rightArray = inArray.slice(end);

    var returnArray = leftArray.concat(substitutionArray);
    return returnArray.concat(rightArray);
  },

  first: function (inArray) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    return inArray[0];

  },

  indexOf: function (inArray, value, index) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    if(!Boolean(index)) {

      index = 0;
    };

    return inArray.indexOf(value,index);

  },

  initial: function (inArray) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    inArray.pop();

    return inArray;

  },

  last: function (inArray) {

    if(!this.validArray(inArray)) {

      return undefined;
    };

    return inArray[(inArray.length-1)];

  },

  lastIndexof: function (inArray, value, index) {

    return inArray.lastIndexOf(value,index);

  },
//rework values
  pull: function (inArray) {

    var args;

    if(!this.validArray(inArray)) {

      return undefined;
    };

    if(arguments.length > 1) {

      var argsCopy = Array.prototype.slice.call(arguments);

      args = argsCopy.slice(1);

    } else {

      return inArray;
    };

    return this.difference(inArray,args);

  },
//rework indices
  pullAt: function (inArray,indices) {

    var args;

    if(!this.validArray(inArray)) {

      return undefined;
    };

    if(arguments.length > 1) {

      var argsCopy = Array.prototype.slice.call(arguments);

      args = argsCopy.slice(1);

    } else {

      return inArray;
    };

    var count = 0;

    for(var i=0;i<args.length;i++) {

      if(args[i]>=0) {

        inArray.splice((args[i]-count),1);
        count++;
      };
    }

    return inArray;

  },

  rest: function (inArray) {

    inArray.shift();

    return inArray;

  },

  slice: function (inArray,start,end) {

    return inArray.slice(start,end);

  },

  take: function (inArray,number) {

    if(number===undefined) {

      number = 1;
    };

    return inArray.slice(0,number);

  },

  takeRight: function (inArray,number) {

    if(number===undefined) {

      number = 1;
    };

    return inArray.slice((inArray.length-number));

  },
//rework args
  zip: function (inArray) {

    var outArrays = [];
    var argsCopy = Array.prototype.slice.call(arguments);

    while(argsCopy.length > 0) {

      var iArray = [];

      for(var i = 0;i<argsCopy.length;i++) {

        var outValue = argsCopy[i].shift();

        iArray.push(outValue);

        if(argsCopy[i].length === 0) {

          argsCopy.splice(i,1);
          i -= 1;
        };

      };

      outArrays.push(iArray);
    };

    return outArrays;

  },

  unzip: function (inArray) {

    var outArray = [];
    var argsCopy = Array.prototype.slice.call(arguments);

    while(argsCopy.length >0) {

      var iArray = [];

      for(var i = 0;i<argsCopy.length;i++) {

        var value = argsCopy[i].shift();
        iArray.push(value);

        if(argsCopy[i].length ===0) {

          argsCopy.splice(i,1);
          i-=1;

        };


      };

      outArray.push(iArray);
    };

    return outArray;
  },
//rework args
  without: function(inArray) {

    var args;

    if(arguments.length > 1) {

      var argsCopy = Array.prototype.slice.call(arguments);

      args = argsCopy.slice(1);

    } else {

      return inArray;
    };

    return this.difference(inArray,args);



  },

  validArray: function(inArray) {

    var valid = Array.isArray(inArray);

    if(!valid) {

      console.log(inArray + " is an invalid array.");
    };

    return valid;
  }
};