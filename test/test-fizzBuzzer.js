const fizzBuzz = require('../fizzBuzzer');

const expect = require('chai').expect;

describe('fizz-buzz', function () {
    it('should throw error when its not a number', function () {
        const invalidInput = 'a';
        expect(function() {
            fizzBuzz(invalidInput);
          }).to.throw(Error);
    })
    it('should be fizz-buzz if multiple of 15', function () {
        const input = 30;
        expect(fizzBuzz(input)).to.be.equal('fizz-buzz');
    })
    it('should be buzz if multiple of 5', function () {
        const pipo = 25;
        expect(fizzBuzz(pipo)).to.be.equal('buzz');
    })
    it('should be fizz if multiple of 3', function () {
        const looney = 9;
        expect(fizzBuzz(looney)).to.be.equal('fizz');
    })
    it('should return number if not multiple of 15, 5, or 3', function () {
        const oceanside = 7;
        expect(fizzBuzz(oceanside)).to.be.a('number');
    })
})