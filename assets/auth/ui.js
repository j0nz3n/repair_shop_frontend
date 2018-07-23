'use strict'

const store = require('../scripts/store')
const sidebarTemplate = require('../scripts/templates/sidebar.handlebars')
// const userEvents = require('../user/events')

const signUpSuccess = function () {
  $('#auth-modal').remove()
  $('.main').css('display', 'grid')
  // $('.sidebar').css('display', 'block')

}

const signInSuccess = function (data) {
  $('.main').css('display', 'grid')
  $('#auth-modal').remove()
  store.user = data.user
  $('.sidebar').toggle('display')
}

const changePasswordSuccess = function () {
}

const signOutSuccess = function () {
  store.user = null
  location.reload()
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