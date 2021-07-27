const snacks = require("./api/snacks.json");

module.exports = (req,res) => {
    res.json(snacks);
};