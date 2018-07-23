'use strict'

const authAPI = require('../auth/api')
const authUI = require('../auth/ui')
const api = require('./api')
const ui = require('./ui')
const content = $('.content')

const clearContent = () =>{
    content.children('div').css('display', 'none')
}

const onShowSettings = () => {
    clearContent()
    $('.wrapper-settings').css('display', 'block')
    
}

const onShowDevices = () => {
    clearContent()
    $('.wrapper-devices').css('display', 'block')
}
const onShowRepairs = () => {
    clearContent()
    $('.wrapper-repairs').css('display', 'block')
}
const onShowAppointments = () => {
    clearContent()
    $('.wrapper-appointments').css('display', 'block')
}

const onSignOut = function (event) {
    event.preventDefault()
    console.log('Sign put ran!')
    
    authAPI.signOut
    .then(authUI.signOutSuccess)
    .catch(authUI.failure)
  }


const userHandlers =  () => {
    $('#settings').click(onShowSettings)
    $('#devices').click(onShowDevices)
    $('#repairs').click(onShowRepairs)
    $('#appointments').click(onShowAppointments)
    $('#sign-out').click(onSignOut)

}

module.exports = {
    userHandlers
}