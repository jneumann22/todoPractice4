const {sendUsernameToServer, getTopResults} = require('./controller.js');
const express = require('express');

const router = express.Router()



router.route('/')
.post(sendUsernameToServer)

router.route('/newFetcher')
.get(getTopResults)


module.exports = router