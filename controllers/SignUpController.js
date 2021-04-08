const DATA = require('../data')
const { genereteCrypt } = require('../test')
module.exports = {
    SignUpGetControllers: (req, res) => {
        res.render('signup', {
            error: ""
        })
    },
    SignUpPostControllers: async (req, res) => {
        try {

            let {login, password } = req.body
            if(login && password){
                if(DATA.find(x => x.login == login)){
                    throw new Error('User Already exists')
                } else {
                    DATA.push({
                        id: DATA.length + 1,
                        login: login,
                        password: await genereteCrypt(password)
                    })
                      res.redirect('/')

                }

            } else {
                throw new Error("Login or Password not found")
            }

        } catch(e) {
            res.render('signup', {
                error: e + ""
            })
        }
    }
}