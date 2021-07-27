const breakfast = require("./breakfast/index");
const lunch = require("./lunch/index");
const dinner = require("./dinner/index")

module.exports = (req,res) => {
    res.json({breakfast,lunch,dinner});
}