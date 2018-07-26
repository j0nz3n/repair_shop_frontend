'use strict'

let apiUrl
const apiUrls = {
  production: 'https://j0nz3n.github.io/repair_shop_frontend/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
