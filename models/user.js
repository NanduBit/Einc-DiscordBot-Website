const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  userId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    username: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'users' });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
