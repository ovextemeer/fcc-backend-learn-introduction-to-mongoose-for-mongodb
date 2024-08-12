require('dotenv').config();
let mongoose = require('mongoose');

// const server = '127.0.0.1:27017';
// const database = 'fcc-Mail';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose
            .connect(process.env.MONGOOSE_CONNECTION_STRING)
            // .connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch((err) => {
                console.log('Database connection error');
            });
    }
}

module.exports = new Database();