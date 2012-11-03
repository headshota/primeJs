describe('Iterating method tests', function() {
    
    it('Test each', function() {
        var arr = [2, 3, 4];
        prime.each(arr, function (value, index) {
           switch(index){
                case 0:
                    expect(value).toBe(2);
                break;
                case 1:
                    expect(value).toBe(3);
                break;
                case 3:
                    expect(value).toBe(4);
                break;
           }
        });
    });

    it('Test map', function() {
        var arr = [2, 3, 4];
        var newArr = prime.map(arr, function (val) { return ++val; });

        expect(newArr[0]).toBe(3);
        expect(newArr[1]).toBe(4);

        var newArr = prime.map(arr, function (val) { return val * 3; });

        expect(newArr[0]).toBe(6);
        expect(newArr[1]).toBe(9);
    });

});