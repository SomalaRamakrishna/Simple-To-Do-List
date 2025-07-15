const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true, // prevent duplicate users
    lowercase: true,
    trim: true
  },
  password: { type: String, required: true }, // will be hashed before save
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Client', userSchema);
