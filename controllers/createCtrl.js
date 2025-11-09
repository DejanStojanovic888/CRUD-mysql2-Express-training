const db = require('../data_base')

const createCtrl = async (req, res) => {
    const {full_name, email} = req.body;
    const sql = `INSERT INTO profiles (full_name, email) VALUES('${full_name}', '${email}')`;
    const [newAcc] = await db.query(sql)
    console.log(newAcc)
    res.redirect('/')
}

module.exports = createCtrl;