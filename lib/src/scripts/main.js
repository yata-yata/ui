var angular = require('angular');

require('angular-router-browserify')(angular);
require('angular-module-animate');

angular.module('todo', ['ngRoute', 'ngAnimate'])
    .config(function($routeProvider, $httpProvider){
        // Set CSRF token
        // TODO: Move ths out
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].getAttribute('content');

        $routeProvider.when('/', {
            controller: 'TodoCtrl',
            templateUrl: 'partials/todo'
        })
        .otherwise({
            redirectTo: '/'
        });
    })
    .controller('TodoCtrl', require('angular-modules').controllers.Todo)
    .factory('todoService', require('angular-modules').services.Todo);
