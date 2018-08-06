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
  $('#auth-modal').hide()
  store.user = data.user
  $('.navbar').toggle('display')
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
}

const changePasswordSuccess = function () {
}

const signOutSuccess = function () {
  store.user = {}
  store.devices = []
  store.repairs = []
  userEvents.clearContent()

  // Close toggle menu (Mobile View)
  $('.navbar-toggle').hasClass('collapsed') ? 
    '' : $('.navbar-toggle').click()

  $('.wrapper').css('display', 'none')
  $('.main').css('display', 'block')
  $('.navbar').toggle('display')
  $('#auth-modal').show()
}

const failure = function (error) {
  console.log('failure ran. Data is:', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}