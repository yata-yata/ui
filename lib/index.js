// Load modules

var Controllers = require('./controllers'),
    Path = require('path'),

    // Declare internals
    internals = {};

internals.credentials = {
    id: process.env.hawkClient,
    key: process.env.hawkSecret,
    algorithm: 'sha256'
};

exports.register = function(plugin, options, next){

    // Declare plugin dependencies
    plugin.dependency('auth');

    // Plugin Setup
    // ------------

    plugin.path(Path.join(__dirname, '..'));

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

    plugin.route([

        { method: 'GET', path: '/login', config: Controllers.Pages.signin },
        { method: 'GET', path: '/', config: Controllers.Pages.home },
        { method: 'GET', path: '/partials/todo', config: Controllers.Pages.todo },
        { method: 'GET', path: '/static/{path*}', config: Controllers.Assets.static },
        { method: 'GET', path: '/api/todos', config: Controllers.Todos.all },
        { method: 'GET', path: '/api/todos/{id}', config: Controllers.Todos.get },
        { method: 'POST', path: '/api/todos', config: Controllers.Todos.post },
        { method: 'PUT', path: '/api/todos/{id}', config: Controllers.Todos.put },
        { method: 'DELETE', path: '/api/todos/{id}', config: Controllers.Todos.destroy },

    ]);

    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
