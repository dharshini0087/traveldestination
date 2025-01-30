const mdb = require('mongoose');
const destinationSchema = mdb.Schema({
    name: String,
    location: String,
    description: String,
    imageURL: String
})

const destination_model = mdb.model("destination", destinationSchema);
module.exports = destination_model;
