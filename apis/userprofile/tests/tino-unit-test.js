'use strict';
var Test = require('tape');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var Path = require('path');
var Request = require('supertest');
var Mockgen = require('../data/mockgen.js');
var Parser = require('swagger-parser');
/**
 * Test for /user
 */
Test('/user', function (t) {

    t.ok(true, 'Tino test succeeded');

});
