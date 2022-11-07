const { CalculateKey } = require("../calculations/CalculateKey");
const { calculateBoyceNormalForm } = require("../calculations/BoyceNormalForm");
const { calculateThirdNormalForm } = require("../calculations/ThirdNormalForm");
const relations = require("../models/dependency.mongo");

async function httpGetRelations(req, res) {
  return res.status(200).json(await relations.find());
}
async function httpPostRelation(req, res) {
  const relation = { ...req.body, primaryKey: [], boyceNF: [], thirdNF: [] };

  if (!relation.attributes || !relation.dependencies) {
    return res.status(400).json({ error: "Data you entered is wrong!" });
  }

  CalculateKey(relation.attributes, relation.dependencies).forEach((el) =>
    relation.primaryKey.push(el)
  );
  calculateBoyceNormalForm(relation).forEach((el) => relation.boyceNF.push(el));
  calculateThirdNormalForm(relation).forEach((el) => relation.thirdNF.push(el));

  relations.create(relation);


  res.status(201).json(relation);
}

module.exports = {
  httpGetRelations,
  httpPostRelation,
};
