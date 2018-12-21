'use strict';

const expect = require('chai').expect;

const fizzbuzzer = require('../fizzBuzzer');

// unit tests
describe('fizzbuzzer', function() {

  // Test the normal case
  it('should properly produce fizz, buzz, or fizzbuzz', function() {
    // range of normal inputs
    const normalCases = [
      {input: 15, expected: 'fizz-buzz'},
      {input: 5, expected: 'buzz'},
      {input: 3, expected: 'fizz'},
      {input: 2, expected: 2}
    ];
    // for each set of inputs, it should produce expected
    normalCases.forEach(function(input) {
      const answer = fizzbuzzer(input.input);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise an error if args not numbers', function() {
    const badInputs = [
      'frog',
      undefined,
      'yeahhhhh buddy'
    ];

    // prove an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });
});

