import { Schema, model } from "mongoose";

const equiposSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    }
})

export default model('Equipos', equiposSchema)