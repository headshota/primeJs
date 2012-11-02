describe('test', function() {
    it('Test prime existence', function () {
        expect(prime).toBeDefined();
    });

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

});