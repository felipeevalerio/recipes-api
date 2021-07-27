const breakfast = require("./breakfast.json");

module.exports = (req,res) => {
    res.json(breakfast);
}