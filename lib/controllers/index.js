var Nipple = require('nipple'),
    Hawk = require('hawk');

exports.login = {
    auth: false,
    handler: function (request, reply) {

    var html = '<a href="/auth/google">Login with Google</a>';
    if (request.session) {
      html += "<br/><br/><pre><span style='background-color: #eee'>session: " + JSON.stringify(request.session, null, 2) + "</span></pre>";
    }
    reply(html);
  }
};

exports.home = {
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
