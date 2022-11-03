const express = require("express");

const { httpGetRelations,httpPostRelation} = require("./relations.controller.js");

const relationsRouter = express.Router();

relationsRouter.get("/", httpGetRelations);
relationsRouter.post("/", httpPostRelation);


module.exports = relationsRouter;
