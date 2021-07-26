const express = require("express");
const app = express();

const snacks = require("./api/snacks.json");

module.exports = app.get((req,res) => {
    return res.json(snacks);

});