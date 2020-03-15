'use strict';

const input = require('../lib/input.js');

describe('test input parser', () => {
    it('should correctly parse input', () => {
      expect(input([1,3])).toStrictEqual(4);
    });
});