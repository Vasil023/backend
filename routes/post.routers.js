const {Router} = require('express')
const Post = require('../models/Post')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/posts', auth, async (req, res) => {
  try {
    const {title} = req.body
    const user =  await User.findById(req.user.userId)
    const post = new Post({title, nickName: user.nickName, user: req.user.userId}).save()
    res.status(201).json({post})
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так'})
  }
})