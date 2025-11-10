<<<<<<< HEAD
const db = require("../data_base");

const updateCtrl = async (req, res) => {
  const { id, active } = req.params;
  const sql = `UPDATE profiles SET active = ${active} WHERE id = ${id}`;
  const updatedACC = await db.query(sql);
  console.log("UpdatedAcc: " + updatedACC);
  res.redirect("/");
};

module.exports = updateCtrl;
=======
const db = require('../data_base')

const updateCtrl = (req,res) => {
    const {id, active} = req.params;
    const sql = `UPDATE profiles SET active = ${active} WHERE id = ${id}`
    const updatedACC = await = db.query(sql)
    console.log('UpdatedAcc: ' + updatedACC)
    res.redirect('/')
}

module.exports = updateCtrl;
>>>>>>> 1e885f683033724d32a4eea48f6135e229f9f1ef
