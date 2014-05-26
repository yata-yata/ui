'use strict';

var angular = require('angular');

angular.module('todo')
    .directive('todoFocus', function todoFocus($timeout) {

        return function (scope, elem, attrs) {
            scope.$watch(attrs.todoFocus, function (newVal) {
                if (newVal) {
                    $timeout(function () {
                        elem[0].focus();
                    }, 0, false);
                }
            });
        };
    });
