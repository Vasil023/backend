const {Schema, model, Types} = require('mongoose')

const postSchema = new Schema({
  title: {type: String, required: true},
  // descr: {type: String, required: true},
  // like: {type:Number, required: true},
  // coment: {type: String, required: true},
  data: {type: Date, default: Date.now},
  user: [{type: Types.ObjectId, ref: 'User'}],
  nickName: {type: String, required: true}
})

module.exports = model('Post', postSchema)