const lunch = require("./lunch.json");

module.exports = (req,res) => {
    res.json(lunch);
}