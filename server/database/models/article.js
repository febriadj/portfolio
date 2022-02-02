const { model, Schema } = require('mongoose');

const ArticleModel = model('articles', new Schema({
  userId: {
    type: Schema.Types.String,
    required: true,
  },
  title: {
    type: Schema.Types.String,
    trim: true,
    required: true,
  },
  shortDesc: {
    type: Schema.Types.String,
    trim: true,
    required: true,
  },
  content: {
    type: Schema.Types.String,
    trim: true,
    required: true,
  },
  file: {
    type: Schema.Types.String,
    default: null,
  },
  comment: {
    type: Schema.Types.Array,
    default: [],
  },
}, {
  timestamps: true,
}));

module.exports = ArticleModel;
