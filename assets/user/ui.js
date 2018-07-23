'use strict'

const store = require('../scripts/store')
const myDevicesTemplate = require('../scripts/templates/myDevicesTemplate.handlebars')
const events = require('./events')


const myDevicesSuccess = function (data) {
    // debugger
    // (myDevicesHTML = myDevicesTemplate(({
    //     devices: element
    // })))
    let myDevicesHTML = undefined
    for (const key in data) {
      data[key].forEach(element => {
          store.user.id==element.user_id? 
          myDevicesHTML= element
          :''
      });
    }
    console.log(myDevicesHTML)
    // events.clearContent()
    $('.content').append(`<p>${JSON.stringify(myDevicesHTML)}</p>`)
    // process the returned JSON!
}

const addDeviceSuccess = (data) => {
    store.device = data.device
    console.log(store.device)
}

const failure = function (error) {
    // $('#message').text('Error on sign out')
    // $('#message').css('background-color', 'red')
    console.log('failure ran. Data is:', error)
}
module.exports = {
    myDevicesSuccess,
    addDeviceSuccess,
    failure
}