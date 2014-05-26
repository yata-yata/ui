'use strict';

var angular = require('angular');
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
    });
