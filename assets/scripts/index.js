'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('../auth/events')
const userEvents = require('../user/events')
const content = $('.content')
// const contentLength = 0


$(() => {
  authEvents.authHandlers()
  userEvents.userHandlers()
  $('.sidebar').css('display', 'none')
  $('.wrapper').css('display', 'none')
  $('.main').css('display', 'block')
  console.log(content.length)
})
