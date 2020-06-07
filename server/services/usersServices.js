 const db = require("../config/db");

module.exports = {
    saveUserInfo: (userInfo) => new Promise((reolve,reject)=> {
        const {fname, lname, phoneNumber, email, message} = userInfo;

        return db.insert({
            fname,
            lname,
            phoneNumber,
            email,
            message
        }).returning('*').into('user').then(data =>{
            console.log(data[0]);
            return resolve(data[0])

        }).catch(e=> reject(e))


    })
}