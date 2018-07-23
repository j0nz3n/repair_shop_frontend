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


module.exports = {
    myDevices,
    addDevice
}