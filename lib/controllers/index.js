exports.login = {
  auth: false, // use this if your app uses other hapi auth schemes, otherwise optional
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
    reply("ACCESS GRANTED");
  }
};
