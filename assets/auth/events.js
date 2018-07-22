'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const authTemplate = require('../scripts/templates/auth.handlebars')
// const modal = require('./modal')

$('.content').append(authTemplate)


const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Sign up ran!')
  
  const data = getFormFields(this) // this === event.target 
  console.log(data)
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Sign in ran!')
  
  const data = getFormFields(this) // this === event.target 
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.failure)
  
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change Password ran!')
  
  const data = getFormFields(this) // this === event.target 
  console.log(data)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Sign put ran!')
  
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.failure)
}

const displayModal = (event) => {
  event.target.id === "up" ? $(".sign-up-modal").css("display", "block") && $(".sign-in-modal").css("display", "none") 
  : $(".sign-in-modal").css("display", "block") && $(".sign-up-modal").css("display", "none")

}

const authHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-form').on('submit', onSignOut)
  $('#up').click(displayModal)
  $('#in').click(displayModal)
}

module.exports = {
  authHandlers
}