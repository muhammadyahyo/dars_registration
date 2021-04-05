const bcrypt = require('bcrypt')

const saltDegree = 10
const text = "muhammad"


async function genereteCrypt(data){
    let salt = await bcrypt.genSaltSync(saltDegree)
    let encrypt = await bcrypt.hashSync(data, salt)
    return encrypt
}

async function confirmHash(data, hash){
    let confirm = bcrypt.compareSync(data, hash)
    return confirm
}

module.exports = {
    confirmHash, genereteCrypt
}


// bcrypt.genSalt(saltDegree, (err, tuz) => {
//     bcrypt.hash(text, tuz, (err, hash) => {
//         bcrypt.compare(text, hash, (err, res) => {
//             console.log(res);
//         })
//     })
// })