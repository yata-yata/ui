var angular = require('angular'),
    todoCtrl = require('./controllers/todo'),
    todoService = require('./services/todo');

require('angular-router-browserify')(angular);

angular.module('todo', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            controller: 'TodoCtrl',
            templateUrl: 'todo'
        })
        .otherwise({
            redirectTo: '/'
        });
    })
    .controller('todoCtrl', todoCtrl)
    .factory('todoService', todoService);
