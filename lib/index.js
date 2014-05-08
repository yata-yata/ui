// Load modules

var Controllers = require('./controllers'),

    // Declare internals
    internals = {};

exports.register = function(plugin, options, next){

  // Plugin Setup

  plugin.bind({
  });

  plugin.select('http').route([

      { method: 'GET', path: '/login', config: Controllers.login },
      { method: 'GET', path: '/home', config: Controllers.home }

  ]);

  next();
};


