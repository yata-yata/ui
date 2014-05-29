exports.signin = {
    plugins: {
        crumb: true
    },
    auth: false,
    handler: function (request, reply) {
        if(request.user){
            reply().redirect('/');
            return;
        }

        reply.view('signin.jade', {
            title: 'Sign In'
        });
    }
};

exports.home = {
    plugins: {
        crumb: true
    },
    auth:  'passport',
    handler: function (request, reply) {

        reply.view('list.jade');
    }
};

exports.todo = {
    handler: function (request, reply) {

        reply.view('partials/todo.jade');
    }
};
