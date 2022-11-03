const mongoose = require("mongoose");

const dependencySchema = new mongoose.Schema({
  left: [String],
  right: [String],
});

const relationSchema = new mongoose.Schema({
  attributes: {
    type: [String],
    required: true,
  },
  dependencies: [
    {
      left: [
        {
          type: String,
          required: true,
        },
      ],
      right: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
  primaryKey: [String],
  thirdNF: [String],
  boyceNF:[String]
});

module.exports = mongoose.model("Relation", relationSchema);
