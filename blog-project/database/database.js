const Sequelize = require('sequelize')
const connection = new Sequelize('blogproject', 'root', 'Igs3712@', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+01:00'
})

module.exports = connection