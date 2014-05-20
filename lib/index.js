// Load modules

var Controllers = require('./controllers'),

// Declare internals
internals = {};

internals.credentials = {
    id: process.env.hawkClient,
    key: process.env.hawkSecret,
    algorithm: 'sha256'
};

require("node-jsx").install();

exports.register = function(plugin, options, next){

    // Plugin Setup

    plugin.views({
        engines: {
            jade: {
                module: require('jade')
            }
        },
        path: __dirname + '/src/templates'
    });

    plugin.bind({
        options: options,
        credentials: internals.credentials
    });

    plugin.select('http').route([

        { method: 'GET', path: '/signin', config: Controllers.signin },
        { method: 'GET', path: '/home', config: Controllers.home },
        { method: 'GET', path: '/static/{path*}', config: Controllers.assets }

    ]);

    next();
};


