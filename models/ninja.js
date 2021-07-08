const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geo schema & and model
const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index: "2dshere"
    }
})

//create ninja schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    address: {
    type: String
    },
    available: {
    type: Boolean,
    default: false
    },
    age: {
    type: Number
    },
    geometry: GeoSchema
    
    //add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports=Ninja;