// Include modules
var Nipple = require('nipple'),
    Hawk = require('Hawk');

// Declare internals
var internals = {};

internals.createHandler = function(method){
    return {
      auth:  'passport',
      handler: function (request, reply) {
          var url = this.options.serviceUri + '/users/' + request.session.user + '/todos' + request.params.id;
          Nipple.request(method, url, {
              headers: {
                  authorization: Hawk.client.header( url, method, { credentials: this.credentials } ).field
              }
          }, function(err, res, payload){
              reply(payload);
          });
      }
    };
};

exports.all = {
  auth:  'passport',
  handler: function (request, reply) {
      debugger;
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

exports.get = internals.createHandler('GET');
exports.post = internals.createHandler('POST');
exports.put = internals.createHandler('PUT');
exports.destroy = internals.createHandler('DELETE');
