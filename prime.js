/**
 * Prime - Javascript Toolkit
 */

(function(window, undefined){
    var _prime = prime;
    var prime = {
        each : function(array, fn){
            var length = array.length;
            for(var i = 0; i < length; i++){
                fn.call(array, array[i], i);
            }
        }
    }

    window.prime = prime;
}(window));