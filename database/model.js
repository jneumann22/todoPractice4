const mongoose = require('mongoose');
const connection = require('./index.js')


const repoSchema = mongoose.Schema({
    login: {type: String, require: true},
    repoLink: {type: String, require: true},
    repoName: {type: String, require: true}
})

const Item = mongoose.model('Item', repoSchema)

module.exports = {Item}
