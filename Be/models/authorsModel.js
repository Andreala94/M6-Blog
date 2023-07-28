const mongoose = require('mongoose');

const AuthorModelSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      }
    ]
    
},
  {
    timestamps: true,
    strict: true,
  }

)

module.exports = mongoose.model('Author', AuthorModelSchema, 'Authors');