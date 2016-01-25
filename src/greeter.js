var cool = require('cool-ascii-faces');

var greeter = {
  greet: function() {
    alert('Hello world! ' + cool());
  }
};

module.exports = greeter;
