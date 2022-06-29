const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryApp', (err) => {
    if (!err)
        console.log('LibraryApp MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;