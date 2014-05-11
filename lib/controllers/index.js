var Nipple = require('nipple');

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
      Nipple.get('http://localhost:8001/users/' + request.session.user + '/todos', function(err, res, payload){
          reply(payload);
      });
  }
};
