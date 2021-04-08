const DATA = require('../data')
const { confirmHash } = require('../test')

module.exports = {
    LoginGetControllers: (req, res) => {
        res.render('login', {
            error: ""
        })
    },
    LoginPostControllers: async (req, res) => {
        try{
            let {login, password } = req.body
            if(login && password){
                let user = DATA.find(x => x.login === login)
                if(!user) throw new Error('User Not Found')
                
                let isTrust = await confirmHash(password, user.password)
                 if(isTrust){
                    res.redirect('/')
                } else {
                    console.log("salom");
                    throw new Error('Password is incorrect')
                    
                }
            } else {
                throw new Error('Login or Password not found')
            }
        } catch(e) {
            res.render('login', {
                error: e + ""
            })
        }
    }
}