const express = require('express');
const userRepository = require('/Utils/userRepository');
const router = express.Router();
const models = require('../database/models');

router.post('/api/user/setting',auth,async (req, res, next) =>{
    let {temperature,humidity} = req.body;
    if(temperature == null || humidity == null) {
        return res.status(415).send('Fill All Requirement');
    }

    /**
     * auth 받아온거에서 authId를 뽑아와야함
     */
    let authId

    userRepository.updateSetting(temperature, humidity, authId)
})


module.exports = router;