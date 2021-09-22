const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicle_type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    garage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Garage",
    },
    vehicle_number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;