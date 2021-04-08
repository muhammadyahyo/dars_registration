const DATA = require('../data')
module.exports = {
    HomeGetControllers: (req, res) => {
        console.log(DATA);
        res.render('index')
    },
    HomePostControllers: (req, res) => {}
}