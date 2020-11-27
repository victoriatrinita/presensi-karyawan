const { Schema, model } = require("mongoose");

const now = new Date();
const PresensiSchema = new Schema({
  nama: {
    type: Number,
    required: true,
  },
  niu: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    default: now,
  },
});

const Presensi = model("presensi", PresensiSchema);

module.exports = Presensi;
