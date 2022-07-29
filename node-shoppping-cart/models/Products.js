const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const productScheema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true, },
    img: { type: String, require: true},
    catogories: { type: Array },
    size: { type: String },
    color: { type: String},
    price: { type: Number,required:true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productScheema);
