const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  balance: Number,
  userId: String,
}, { collection: 'users' });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);