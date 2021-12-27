const morgan = require("morgan");
const express = require("express");

const user = require("../routes/users");
const post = require("../routes/posts");
const error = require("../middleware/error");

module.exports = function (app) {
    app.use(express.json());
    app.use(morgan("tiny"));
    app.use("/api/users", user);
    app.use("/api/posts", post);
    app.use(error);
};