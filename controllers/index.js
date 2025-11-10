const db = require('../data_base')

const homeCtrl = async (req, res) => {
    const sql = `SELECT * FROM profiles`
    const [data, meta] = await db.query(sql)
    console.log(data)
    res.render('index',{data})
}

module.exports = homeCtrl;