'use strict'

const store = require('../scripts/store')
const sidebarTemplate = require('../scripts/templates/signed-in.handlebars')

const signUpSuccess = function (data) {
  // $('#auth-modal').remove()
  // $('.main').css('display', 'grid')
  console.log('signUpSuccess ran. Data is:', data)
}

const signInSuccess = function (data) {
  $('.main').css('display', 'grid')
  $('#auth-modal').remove()
  store.user = data.user
  $('.main').append(sidebarTemplate)
}

const changePasswordSuccess = function () {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const failure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.log('failure ran. Data is:', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}