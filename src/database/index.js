const Sequelize = require('sequelize');

const configDB = require('../config/database');

const Livro = require('../models/Livro');

const connection = new Sequelize(configDB)

Livro.init(connection)

module.exports = connection;