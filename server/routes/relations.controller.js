const relations = require("../models/dependency.mongo");

async function httpGetRelations(req, res) {
  return res.status(200).json(await relations.find());
}
async function httpPostRelation(req, res) {
  const relation = { ...req.body, primaryKey: [], boyceNF: [], thirdNF: [] };

  if (!relation.attributes || !relation.dependencies) {
    return res.status(400).json({ error: "Data you entered is wrong!" });
  }

  relations.create(relation);

  return res.status(201).json(relation);
}

module.exports = {
  httpGetRelations,
  httpPostRelation,
};
