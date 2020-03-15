#!/usr/bin/env node
'use strict';

const minimist = require('minimist');

const readInput = require('../lib/input.js');
const note = require('../lib/notes.js');
console.log(process.argv);
console.log('minimist', minimist(process.argv));

const parsedInput = readInput();
// console.log(parsedInput);
note(parsedInput);