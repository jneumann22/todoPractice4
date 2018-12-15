const {getItemsFromGitHub, saveToDatabase, get25Items} = require('../database/dbHelpers.js');

const sendUsernameToServer = (req, res) => {
    let {term} = req.body
    getItemsFromGitHub(term, saveToDatabase, () => {
        res.status(203).send('added')
    })

}


const getTopResults = (req, res) => {
    get25Items((data) => {
        res.status(200).send(data)
    })
}

module.exports = {sendUsernameToServer, getTopResults}



