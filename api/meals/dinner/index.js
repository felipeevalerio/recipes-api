const dinner = require("./dinner.json");

module.exports = (req,res) => {
    res.json(dinner);
}