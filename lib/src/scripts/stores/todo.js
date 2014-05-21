var AppDispatcher = require('../dispatcher/app'),
    EventEmitter = require('events').EventEmitter,
    TodoConstants = require('../constants/todo'),
    todos = {},
    TodoStore = function(){
        EventEmitter.call(this);
    };

TodoStore.prototype = Object.create(EventEmitter.prototype, {
    areAllComplete: function(){
    },

    getAll: function(){
    },

    emitChange: function(){},

    addChangeListener: function(callback){
    },

    removeChangeListener: function(callback){
    }
});

