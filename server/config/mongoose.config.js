const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then( () => console.log(`connect to ${DB} database`))
        .catch( err => console.log('cannot connect to DB', err))
}