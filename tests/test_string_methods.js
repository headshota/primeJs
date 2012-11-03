describe('String method tests', function() {
    it('Test left trim', function () {
        var s = '    hello';
        expect(prime.ltrim(s)).toBe('hello');
    });

    it('Test right trim', function () {
        var s = 'hello   ';
        expect(prime.rtrim(s)).toBe('hello');
    });

    it('Test trim', function () {
        var s = '   hello   ';
        expect(prime.trim(s)).toBe('hello');
    });
});