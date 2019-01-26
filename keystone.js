let keystone = require('keystone')

keystone.init({
    'cookie secret': 'secure string'
})

keystone.start()