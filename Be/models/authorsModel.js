const mongoose = require('mongoose');

const minlength = [
	8,
	"The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).",
];
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
    password: {
      type: String,
      required: [
        true,
        "Password is required and must be at least of 8 characters."]
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