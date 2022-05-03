import {Schema, model} from 'mongoose';

const HomeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    username: {
        type: String,
    },
    date: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    }
    
});


HomeSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}


export default model( 'Home', HomeSchema );