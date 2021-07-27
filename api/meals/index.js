const breakfast = require("./breakfast/breakfast.json");
const lunch = require("./lunch/lunch.json");
const dinner = require("./dinner/dinner.json");

module.exports = (req,res) => {
    res.json({breakfast,lunch,dinner});
}