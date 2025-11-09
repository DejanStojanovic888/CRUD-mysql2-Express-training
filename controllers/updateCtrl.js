const db = require('../data_base')

const updateCtrl = (req,res) => {
    const {id, active} = req.params;
    const sql = `UPDATE profiles SET active = ${active} WHERE id = ${id}`
    const updatedACC = await = db.query(sql)
    console.log('UpdatedAcc: ' + updatedACC)
    res.redirect('/')
}

module.exports = updateCtrl;