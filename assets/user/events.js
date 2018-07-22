'use strict'

const api = require('./api')
const ui = require('./ui')

const showSettings = () => {
    console.log("settings")
}




const userHandlers =  () => {
    $('#settings').click(showSettings)

}

module.exports = {
    userHandlers
}