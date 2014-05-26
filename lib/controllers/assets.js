var Path = require('path');

exports.static = {
    auth: false,
    handler: {
        directory: {
            path: Path.normalize(__dirname + '/../generated'),
            listing: false,
            index: false
        }
    }
};
