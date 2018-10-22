// this file ins't transpiled, so must use CommonJs and Es5.

// Register babel to transpile before our tests run.

require('babel-register')();

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
