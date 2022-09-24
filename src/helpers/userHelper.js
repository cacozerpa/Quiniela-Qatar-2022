const bcrypt = require('bcrypt');
const userModel = require('../utils/Schemas/UserSchema');
const responseJSON = require('../utils/responseJSON');
const errorMsg = require('../utils/errorMsg.json');

async function createUser(req, res) {


    if(!req.body || Object.keys(req.body).length === 0){
        
    }else{

        //TODO: Create logic to validate if a user exist, encript password, validate that the body has all the necesary data
        try{
            const user = userModel(req.body)
            await user.save()
            res.send(responseJSON('200', user))
        }catch(error){
            res.send(responseJSON('500', '', error))
        }
        
    }

}

module.exports = {
    createUser
}