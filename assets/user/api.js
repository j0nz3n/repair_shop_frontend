'use strict'

const config = require('../scripts/config')
const store = require('../scripts/store')


const myDevices = () => {
    return $.ajax({
        url: config.apiUrl + '/devices',
        method: 'GET'
    })
}
const addDevice = (data) => {
    return $.ajax({
        url: config.apiUrl + '/devices',
        method: 'POST',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

const editDevice = (data, deviceId) => {
    return $.ajax({
        url: config.apiUrl + '/devices/' + deviceId,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

const deleteDevice = (deviceID) => {
    return $.ajax({
        url: config.apiUrl + '/devices/' + deviceID,
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
    })
}

const myRepairs = () => {
    return $.ajax({
        url: config.apiUrl + '/repair_orders',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
    })
}

const createRepair = (data) => {
    return $.ajax({
        url: config.apiUrl + '/repair_orders',
        method: 'POST',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

module.exports = {
    myDevices,
    addDevice,
    editDevice,
    deleteDevice,
    myRepairs,
    createRepair
}