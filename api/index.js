const express = require("express");
const app = express();

const snacks = require("./api/snacks.json");

const breakfast = require("./api/breakfast.json");
const lunch = require("./api/lunch.json");
const dinner = require("./api/dinner.json");

app.get("/snacks",(req,res)=> {
    return res.json(snacks);
});

app.get("/meals",(req,res) => {
    return res.json({
        breakfast,
        lunch,
        dinner
    })
})

app.get("/meals/breakfast",(req,res) => {
    return res.json(breakfast);
}) 

app.get("/meals/lunch",(req,res) => {
    return res.json(lunch);
})

app.get("/meals/dinner",(req,res) => {
    return res.json(dinner);
})

module.exports = app;
