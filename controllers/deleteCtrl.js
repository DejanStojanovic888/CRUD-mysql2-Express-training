<<<<<<< HEAD
const db = require("../data_base");

const deleteCtrl = async (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM profiles WHERE id = ${id}`;
  const deletedAcc = await db.query(sql);
  console.log(deletedAcc);
  res.redirect("/");
};

module.exports = deleteCtrl;
=======
const db = require('../data_base')

const deleteCtrl = async (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM profiles WHERE id = ${id}`
    const deletedAcc = await db.query(sql)
    console.log(deletedAcc)
    res.redirect('/')
}

module.exports = deleteCtrl;
>>>>>>> 1e885f683033724d32a4eea48f6135e229f9f1ef
