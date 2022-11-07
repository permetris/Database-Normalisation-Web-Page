const mongoose = require("mongoose");

const dependencySchema = new mongoose.Schema({
  left: [String],
  right: [String],
});

const tableSchema = new mongoose.Schema({
  attributes: [String],
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
  primaryKey: [tableSchema],
  thirdNF: [tableSchema],
  boyceNF: [tableSchema],
});

module.exports = mongoose.model("Relation", relationSchema);
