'use strict'

const store = require('../scripts/store')
const userEvents = require('../user/events')
const authTemplate = require('../scripts/templates/auth.handlebars')

const signUpSuccess = function () {
  $('#auth-modal').remove()
  $('.content').append(authTemplate)
  // Need more work!
}

const signInSuccess = function (data) {
  $('.main').css('display', 'grid')
  $('#auth-modal').hide()
  store.user = data.user
  $('.sidebar').toggle('display')
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
}

const changePasswordSuccess = function () {
}

const signOutSuccess = function () {
  store.user = null
  $('.wrapper').css('display', 'none')
  $('.main').css('display', 'block')
  $('#auth-modal').show()
}

const failure = function (error) {
  // $('#message').text('Error on sign out')
  // $('#message').css('background-color', 'red')
  console.log('failure ran. Data is:', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}