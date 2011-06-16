  var whenReady = function(obj) {
    return function() {
      var interval = 0, 
          retries = 0, 
          retryCount = 30, 
          pollInterval = 100, 
          cbArgs = [], 
          conditionArgs = [], 
          retVal, 
          cb = obj.cb;
      if (obj.retryCount) { retryCount = obj.retryCount; };
      if (obj.pollInterval) { pollInterval = obj.pollInterval; };
      if (obj.cbArgs) { cbArgs = obj.cbArgs; };
      if (obj.conditionArgs) { conditionArgs = obj.conditionArgs; };
      var condition = curry(obj.condition, {}, obj.conditionArgs);
      interval = setInterval(function() {
        if (retVal = condition()) {
          clearInterval(interval);
          return cb(retVal);
        };
        if (++retries === retryCount) {
          clearInterval(interval);
          return false;
        };
      }, pollInterval);
    }
  };

  var curry = function(fn, scope) {
    var scope = scope || window;
    var args = [];
    for (var i=2, len = arguments.length; i < len; ++i) {
      args.push(arguments[i]);
    };
    return function() {
      return fn.apply(scope, args);
    };
  };
