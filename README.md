another js lib
==============

whenReady
---------

* whenReady is syntactic sugar for creating an arbitrary conditional polling 
  callback mechanism using the Command and Observer patterns. it is configurable, meaning you can pass in

```
    the callback.                                     cb : f(){}  (req)
    the condition to satisfy before callback.  condition : f(){}  (req)
    the polling interval.                   pollInterval : #      (opt)       
    number of retries before giving up        retryCount : #      (opt)
    the callback arguments                        cbArgs : []     (opt)
    the arguments passed to the condition  conditionArgs : []     (opt)
```

* example

```
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
```

* you can also create a whenReady function and use it later, useful when 
  you have a lof of callback chaining

```
    // when element <div id='slowNDumpy'></div> is loaded dynamically, it will
    // receive the class fast_n_snappy 
    var doStuff = whenReady({
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
    });

    // wait a second, then start the whenReady polling
    setTimeout(doStuff, 1000);
```
