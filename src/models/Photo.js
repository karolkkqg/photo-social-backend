const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    userId: {type: String, required: true }, //U Uasrio propietario de la foto
    imageUrl: {type: String, required: true },
    createdAt: {type: Date, default: Date.now },
});

module.exports = mongoose.model("Photo", PhotoSchema);