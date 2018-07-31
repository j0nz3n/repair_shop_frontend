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


{/* <nav class="navbar navbar-inverse" role="navigation">
<a class="navbar-brand" href="#">My Repair Shop</a>
    <!-- Navbar -->
    <div class="container">
      <ul class="nav">
        <br />
        <li class="nav-li" id="home">
          <button class="btn btn-default btn-lrg">
            <span class="glyphicon glyphicon-home"></span>
          </button>
            Home
        </li>
        <br />
        <li class="nav-li" id="devices">
          <button class="btn btn-default btn-lrg">
            <span class="glyphicon glyphicon-phone"></span>
          </button>
          Devices
        </li>
        <br />
        <li class="nav-li" id="settings">
          <button class="btn btn-default btn-lrg">
            <span class="glyphicon glyphicon-cog"></span>
          </button>
          Settings
        </li>
        <br />
      </ul>
    </div>
</nav> */}