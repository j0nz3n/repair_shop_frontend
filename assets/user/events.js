'use strict'

const authAPI = require('../auth/api')
const authUI = require('../auth/ui')
const api = require('./api')
const ui = require('./ui')
const content = $('.content')
const getFormFields = require('../../lib/get-form-fields')

const clearContent = () =>{
    content.children('div').css('display', 'none')
    // FIGURE OUT HOW TO REMOVE CHILDREN ELEMENTS FROM DOM!
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

const onShowChangePW = () => {
    clearContent()
    $('.wrapper-change-pw').css('display', 'block')
    // Need to finish what happens after
}

const onSignOut = function (event) {
    event.preventDefault()
    
    authAPI.signOut
    .then(authUI.signOutSuccess)
    .catch(authUI.failure)
}

const onShowMyDevices = function () {
    clearContent()
    api.myDevices()
    .then(ui.myDevicesSuccess)
    .catch(ui.failure)
}

const onShowAddDevice = () => {
    clearContent()
    $('.wrapper-add-device').css('display', 'block')
}

const onAddDevice = (event) => {
    event.preventDefault()

    const data = getFormFields(event.target)
    // console.log(data)
    
    api.addDevice(data)
    .then(ui.addDeviceSuccess)
    .catch(ui.failure)
}


const userHandlers =  () => {
    $('#settings').click(onShowSettings)
    $('#devices').click(onShowDevices)
    $('#repairs').click(onShowRepairs)
    $('#appointments').click(onShowAppointments)
    $('#sign-out').click(onSignOut)
    $('#change-pw').click(onShowChangePW)
    $('#device-show-all').click(onShowMyDevices)
    $('#device-add').click(onShowAddDevice)
    $('#add-device-form').on('submit', onAddDevice)
    

}

module.exports = {
    userHandlers,
    clearContent
}