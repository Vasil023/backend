const {Schema, model, Types} = require('mongoose')

const userSchema = new Schema({
  email:{type: String, required: true, unique: true},
  nickName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  posts: [{type: Types.ObjectId, ref: 'Post'}],
  friends: [{type: Types.ObjectId, ref: 'User'}]
})

module.exports = model('User', userSchema)