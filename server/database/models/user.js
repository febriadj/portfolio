const { model, Schema } = require('mongoose');

const UserModel = model('users', new Schema({
  username: {
    type: Schema.Types.String,
    trim: true,
    unique: true,
  },
  email: {
    type: Schema.Types.String,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    trim: true,
    unique: true,
  },
}, {
  timestamps: true,
}));

module.exports = UserModel;
