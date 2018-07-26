'use strict'

const store = require('../scripts/store')
const myDevicesTemplate = require('../scripts/templates/myDevicesTemplate.handlebars')


const myDevicesSuccess = function (data) {
    // Show only the devices thats belong to current_user and ad them to the store
    // Is ther a way to do this on the backedend instead? new mehod
    let handlebarsTemplate, myDevicesHTML = {}
    for (const key in data) {
        data[key].forEach(device => {
            store.user.id == device.user_id ?
                myDevicesHTML[device.id] = device :
                ''
            store.user.id == device.user_id ? store.devices.push(device) : ''
        });
    }
    // console.log(store)
    handlebarsTemplate = myDevicesTemplate({
        devices: myDevicesHTML
    })
    $('.tmp-container').css('display', 'block').append(handlebarsTemplate)
}

const addDeviceSuccess = (data) => {
    store.device = data.device

}

const editDeviceSuccess = () => {
    // Display success to user
}


const myRepairsSuccess = (data) => {
    console.log(data)
}

const deleteSuccess = () => {
    console.log("Delete Successful")
}

const failure = function (error) {
    console.log('failure ran. Data is:', error)
}
module.exports = {
    myDevicesSuccess,
    addDeviceSuccess,
    editDeviceSuccess,
    myRepairsSuccess,
    deleteSuccess,
    failure
}