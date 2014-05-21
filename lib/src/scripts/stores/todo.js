var AppDispatcher = require('../dispatcher/app'),
    EventEmitter = require('events').EventEmitter,
    _ = require('lodash'),
    todos = {},
    TodoStore = function(){
        EventEmitter.call(this);
    };

function create(text) {
    var id = Date.now();
    todos[id] = {
        id: id,
        complete: false,
        text: text
    };
}

function update(id, updates) {
    todos[id] = _.extend(todos[id], updates);
}

function updateAll(updates) {
    for (var id in todos) {
        update(id, updates);
    }
}

function destroy(id) {
    delete todos[id];
}

function destroyCompleted() {
    for (var id in todos) {
        if (todos[id].complete) {
            destroy(id);
        }
    }
}

TodoStore.prototype = Object.create(EventEmitter.prototype, {
    areAllComplete: function(){
        for (id in _todos) {
            if (!todos[id].complete) {
                return false;
                break;
            }
        }
        return true;
    },

    getAll: function(){
        return todos;
    },

    emitChange: function(){
        this.emit('change');
    },

    addChangeListener: function(callback){
        this.on('change', callback);
    },

    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action,
        text;

        switch(action.actionType){

            case 'create':
                text = action.text.trim();
                if(text){
                    create(text);
                }
                break;

            case 'undoComplete':
                update(action.id, { complete: false });
                break;

            case 'complete':
                update(action.id, { complete: true });
                break;

            case 'updateText':
                text = action.text.trim();
                if(text){
                    update(action.id, {text: text});
                }
                break;

            case 'destroy':
                destroy(action.id);
                break;

            case 'destryCompleted':
                destroyCompleted();
                break;

            default:
                return true;

        }

        TodoStore.emitChange();

        return true;
});

module.exports = TodoStore;
