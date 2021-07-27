const breakfast = require("../breakfast.json");
const lunch = require("../lunch.json");
const dinner = require("../dinner.json");



// app.get("/meals",(req,res) => {
//     return res.json({
//         breakfast,
//         lunch,
//         dinner
//     })
// })

// app.get("/meals/breakfast",(req,res) => {
//     return res.json(breakfast);
// }) 

// app.get("/meals/lunch",(req,res) => {
//     return res.json(lunch);
// })

// app.get("/meals/dinner",(req,res) => {
//     return res.json(dinner);
// })

module.exports = (req,res) => {
    res.json(breakfast);
};
