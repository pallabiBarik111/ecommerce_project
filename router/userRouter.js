const express = require('express');
const router = express.Router();
const {createUser,getUser,getUserBywork,getupdateUser,getDeleteUser,login}=require('../controller/userController')

// Post_method for user......

router.post('/',createUser);


// login for user...........

router.post('/login',login);



router.get('/',getUser);

router.get('/:workType',getUserBywork);

router.put('/:id', getupdateUser);

router.delete('/:id', getDeleteUser);

module.exports = router;
