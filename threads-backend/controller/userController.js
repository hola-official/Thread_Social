const User = require('../models/userModel')

const signUpUser = async (req, res) => {
    try {
        const {name, email, username, password} = req.body
        const user = await User.findOne({})
    } catch (err) {
        
    }
}

module.exports = { signUpUser }