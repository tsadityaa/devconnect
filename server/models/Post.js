
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    maxlength: [1000, 'Post cannot be more than 1000 characters'],
    required: [true, 'Post text is required'],
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
