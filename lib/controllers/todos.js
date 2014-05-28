// Include modules
var Nipple = require('nipple'),
    Boom = require('boom'),
    Hawk = require('Hawk');

// Declare internals
var internals = {};

exports.all = {
    auth:  'passport',
    handler: function (request, reply) {
        var url = this.options.serviceUri + '/users/' + request.session.user + '/todos';

        Nipple.get(url, {
            headers: {
                authorization: Hawk.client.header( url, 'GET', { credentials: this.credentials } ).field
            }
        }, function(err, res, payload){
            if(err){
                reply(Boom.wrap(err));
            } else {
                reply(payload);
            }
        });
    }
};

exports.get = {
    auth:  'passport',
    handler: function (request, reply) {
        var url = this.options.serviceUri + '/users/' + request.session.user + '/todos/' + request.params.id;

        Nipple.get(url, {
            headers: {
                authorization: Hawk.client.header( url, 'GET', { credentials: this.credentials } ).field
            }
        }, function(err, res, payload){
            if(err){
                reply(Boom.wrap(err));
            } else {
                reply(payload);
            }
        });
    }
};

exports.post = {
    plugins: {
        crumb: true
    },
    auth:  'passport',
    handler: function (request, reply) {
        var url = this.options.serviceUri + '/users/' + request.session.user + '/todos';

        Nipple.post(url, {
            headers: {
                authorization: Hawk.client.header( url, 'POST', { credentials: this.credentials } ).field
            },
            payload: JSON.stringify(request.payload)
        }, function(err, res, payload){
            if(err){
                reply(Boom.wrap(err));
            } else {
                reply(payload);
            }
        });
    }
};

exports.put = {
    auth:  'passport',
    handler: function (request, reply) {
        var url = this.options.serviceUri + '/users/' + request.session.user + '/todos/' + request.params.id;

        Nipple.put(url, {
            headers: {
                authorization: Hawk.client.header( url, 'PUT', { credentials: this.credentials } ).field
            },
            payload: JSON.stringify(request.payload)
        }, function(err, res, payload){
            if(err){
                reply(Boom.wrap(err));
            } else {
                reply(payload);
            }
        });
    }
};

exports.destroy = {
    auth:  'passport',
    handler: function (request, reply) {
        var url = this.options.serviceUri + '/users/' + request.session.user + '/todos/' + request.params.id;

        Nipple['delete'](url, {
            headers: {
                authorization: Hawk.client.header( url, 'DELETE', { credentials: this.credentials } ).field
            }
        }, function(err, res, payload){
            if(err){
                reply(Boom.wrap(err));
            } else {
                reply(payload);
            }
        });
    }
};
