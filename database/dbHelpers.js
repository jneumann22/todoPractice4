const {token} = require('../config.js');
const request = require('request');
const {Item} = require('./model.js');
const axios = require('axios')

const getItemsFromGitHub = (term, callback, response) => {
    let options = {
        headers: {
            'User-Agent': 'request',
            'Authorization':  `token ${token}`
        }
    }

    axios.get(`https://api.github.com/users/${term}/repos`, options.headers)
        .then(({data}) => {
            console.log(data);
            callback(data, (err, data) => {
                if (err) {
                    console.error(err)
                } else {
                    response()
                }
            })
        })
    
}

const saveToDatabase = (data, callback) => {
    console.log(typeof data);
    finalData = data.map((item) => {
        return (
        {login: item.login, repoLink: item.clone_url, repoName: item.name}
        )
    })
    Item.insertMany(finalData, (err, data) => {
        if (err) {
            console.error(err)
        } else {
            callback()
        }
    })
}

const get25Items = (callback) => {
    Item.find({}, (err, data) => {
        if (err) {
            console.error(err)

        } else {
            callback()
        }
    })
}



module.exports = {getItemsFromGitHub, saveToDatabase, get25Items}
