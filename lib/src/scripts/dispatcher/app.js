var Dispatcher = require('./dispatcher'),
    AppDispatcher = function(){
        Dispatcher.call(this);
    };

AppDispatcher.prototype = Object.create(Dispatcher.prototype, {
    handleViewAction: function(action){
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;
