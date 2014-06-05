var angular = require('angular'),
    todoCtrl = require('angular-modules').controllers.todo,
    todoService = require('angular-modules').services.todo;


require('angular-router-browserify')(angular);

angular.module('todo', ['ngRoute'])
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
    .controller('TodoCtrl', todoCtrl)
    .factory('todoService', todoService);
