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
        },
        map : function(array, fn) {
            var length = array.length;
            var resultArray = [];
            for(var i = 0; i < length; i++){
                resultArray.push(fn.call(array, array[i]));
            }
            return resultArray;
        },
        ltrim : function(str){
            return str.replace(/^\s+/, '');
        },
        rtrim : function(str){
            return str.replace(/\s+$/, '');
        },
        trim : function(str){
            return this.rtrim(this.ltrim(str));
        }
    }

    window.prime = prime;
}(window));