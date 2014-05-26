var Nipple = require('nipple'),
    Path = require('path'),
    Hawk = require('Hawk'),
    React = require('react');

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

      reply.view('list.jade', {
          reactOutput: output
      });
  }
};

exports.todoList = {
  auth:  'passport',
  handler: function (request, reply) {
      var url = this.options.serviceUri + '/users/' + request.session.user + '/todos';
      Nipple.get(url, {
          headers: {
              authorization: Hawk.client.header( url, 'GET', { credentials: this.credentials } ).field
          }
      }, function(err, res, payload){
          reply(payload);
      });
  }
};

exports.assets = {
    auth: false,
    handler: {
        directory: {
            path: Path.normalize(__dirname + '/../generated'),
            listing: false,
            index: false
        }
    }
};
