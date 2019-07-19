var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})
.then(() => console.log('mongoDB connected...'))
.catch(err => console.log(err));

let userSchema = new mongoose.Schema({
    user: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: String,
        required: true
    }
});

let users = mongoose.model('user', userSchema);

module.exports = users;