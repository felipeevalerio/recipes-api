const snacks = require("./api/snacks.json");

module.exports = (req,res) => {
    return res.json(snacks);
};