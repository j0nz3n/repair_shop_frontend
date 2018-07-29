'use strict'

// Imports
const authAPI = require('../auth/api')
const authUI = require('../auth/ui')
const api = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')
const content = $('.content')
const getFormFields = require('../../lib/get-form-fields')

// Clear .tmp elements from  DOM
const clearContent = () => {
    content.children('div').css('display', 'none')
    $('.tmp').remove()
}

// SETTINGS
const onShowSettings = () => {
    clearContent()
    $('.wrapper-settings').css('display', 'block')
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

// DEVICES
const onShowDevices = () => {
    clearContent()
    $('.wrapper-devices').css('display', 'block')
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

const onAddDevice = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)

    api.addDevice(data)
        .then(onShowMyDevices)
        .catch(ui.failure)
}

const onShowEditDevice = function (event) {
    // debugger
    event.preventDefault()
    clearContent()
    let template, target = $(event.target).parents('ul').attr('data-id')
    store.devices.forEach((device) => {
        if (device.id == target) {
            template = `<div data-id="${device.id}" class="tmp">
            <h1>Update Device Information</h1>
            <hr>
            <form id="edit-device-form" class="border">
            <input type="text" name="device[make]" placeholder="${device.make}">
            <input type="text" name="device[model]" placeholder="${device.model}">
            <input type="text" name="device[serial_number]" placeholder="${device.serial_number}">
            <input type="submit" value="Edit Device">
            </form>
            </div>`
        }
    })
    $('.tmp-container').css('display', 'block').append(template)
    $('#edit-device-form').on('submit', onEditDevice)
}

const onEditDevice = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    const deviceId = $(event.target).closest('div').attr('data-id')
    // console.log(deviceId)

    api.editDevice(data, deviceId)
        .then(onShowMyDevices)
        .catch(ui.failure)
}

const onDeleteDevice = function (event) {
    event.preventDefault()
    const deviceId = $(event.target).closest('ul').attr('data-id')
    api.deleteDevice(deviceId)
        .then(onShowMyDevices)
        .catch(ui.failure)
}

// REPAIRS
// const onShowRepairs = () => {
//     clearContent()
//     $('.wrapper-repairs').css('display', 'block')
// }

const onShowRepairRequest = function (event) {
    clearContent()
    let template, target = $(event.target).parents('ul').attr('data-id')
    store.devices.forEach((device) => {
        if (device.id == target) {
            template = `<div class="tmp">
            <h1>Repair Request</h1>
            <hr>
            <form id="repair-form" class="border">
            <input type="text" name="repair[make]" value="${device.make}">
            <input type="text" name="repair[model]" value="${device.model}">
            <input type="text" name="repair[serial_number]" value="${device.serial_number}">
            <textarea placeholder="What is wrong with this device?" name="repair[complaint]" autofocus></textarea>
            <input type="submit" value="Request a Repair">
            </form>
            </div>`
        }
    })
    $('.tmp-container').css('display', 'block').append(template)
    // $('.wrapper-my-repairs').css('display', 'block')
}

const onShowMyRepairs = function () {
    clearContent()
    api.myRepairs()
        .then(ui.myRepairsSuccess)
        .catch(ui.failure)
}


// Appointments
// const onShowAppointments = () => {
//     clearContent()
//     $('.wrapper-appointments').css('display', 'block')
// }





const userHandlers = () => {
    $('#home').click(clearContent)
    $('#devices').click(onShowDevices)
    $('#settings').click(onShowSettings)
    $('#change-pw').click(onShowChangePW)
    $('#sign-out').click(onSignOut)
    $('#device-show-all').click(onShowMyDevices)
    $('#device-add').click(onShowAddDevice)
    $('#add-device-form').on('submit', onAddDevice)
    // $('#edit-device-form').on('submit', onEditDevice)
    $('#repairs-show-all').click(onShowRepairRequest)
    $('#repairs-open').click(onShowMyRepairs)
    $('.tmp-container').on('click', "button[id^='device-edit']", onShowEditDevice)
    $('.tmp-container').on('click', "button[id^='device-minus']", onDeleteDevice)
    $('.tmp-container').on('click', "button[id^='device-repair']", onShowRepairRequest)
    // $('#appointments').click(onShowAppointments)
}

module.exports = {
    userHandlers,
    clearContent,
    onShowMyDevices
}