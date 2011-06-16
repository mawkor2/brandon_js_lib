another js lib
==============

whenReady
---------

* whenReady is syntactic sugar for creating an arbitrary conditional polling 
  callback mechanism. it is configurable, meaning you can pass in

  `1. the callback.                                     cb : f(){}  (req)`
  `1. the condition to satisfy before callback.  condition : f(){}  (req)`
  `2. the polling interval.                   pollInterval : #      (opt)`       
  `3. number of retries before giving up        retryCount : #      (opt)`
  `4. the callback arguments                        cbArgs : []     (opt)`
  `5. the arguments passed to the condition  conditionArgs : []     (opt)`

* sample usage
`
    // when element <div id='slowNDumpy'></div> is loaded dynamically, it will
    // receive the class fast_n_snappy 
    whenReady({
      cb: function(slowNDumpy) {
        slowAndDumpy.className = 'fast_n_snappy';
      },
      condition: function() {
        var someElem;
        if (someElem = document.getElementById('slowNDumpy')) {
          return someElem;
        }
        return false;
      }
    })();
`