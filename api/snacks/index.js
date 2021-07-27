const snacks = require("./snacks.json");

module.exports = (req,res) => {
    res.json(snacks);
};