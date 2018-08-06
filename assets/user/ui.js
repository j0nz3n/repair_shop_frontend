'use strict'

const store = require('../scripts/store')
const myDevicesTemplate = require('../scripts/templates/myDevicesTemplate.handlebars')
const myRepairsTemplate = require('../scripts/templates/myRepairsTemplate.handlebars')


const myDevicesSuccess = function (data) {
    // Show only the devices thats belong to current_user and ad them to the store
    // Is ther a way to do this on the backedend instead? new mehod?
    let handlebarsTemplate, myDevicesHTML = {}
    for (const key in data) {
        data[key].forEach(device => {

            store.user.id == device.user_id ?
                myDevicesHTML[device.id] = device : ''
            
            !(device.id in store.devices) && !(store.user.id == device.user_id) ?  '' : store.devices.push(device) 
            // store.user.id == device.user_id ?
            //     store.devices.push(device) : ''
        });
    }
    handlebarsTemplate = myDevicesTemplate({
        devices: myDevicesHTML
    })
    console.log(store)
    $('.tmp-container').css('display', 'block').append(handlebarsTemplate)
}

const addDeviceSuccess = (data) => {
    store.device = data.device
}

const editDeviceSuccess = () => {
    // Display success to user
}


const myRepairsSuccess = (data) => {
    let handlebarsTemplate, myRepairsHTML = {}
    for (const key in data) {
        data[key].forEach(repair_order => {

            store.user.id == repair_order.user_id ?
            myRepairsHTML[repair_order.id] = repair_order : ''

            store.user.id == repair_order.user_id ? 
            store.repairs.push(repair_order) : ''
        });
    }
    // console.log(store)
    handlebarsTemplate = myRepairsTemplate({
        repair_orders: myRepairsHTML
    })
    $('.tmp-container').css('display', 'block').append(handlebarsTemplate)
}

const createRepairSuccess = (data) => {
    const template = `<div class="tmp">
                        <h1>Repair Order Created Successfully</h1>
                      </div>`
    $('.tmp-container').css('display', 'block').append(template)
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
    createRepairSuccess,
    deleteSuccess,
    failure
}
