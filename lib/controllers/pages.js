exports.signin = {
    auth: false,
    handler: function (request, reply) {

        reply.view('signin.jade', {
            title: 'Sign In'
        });
    }
};

exports.home = {
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
