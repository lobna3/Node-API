const mongoose = require('mongoose')

const clientSchema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        prenom: {
            type: String,
            required: true,
            
        },
        email:{
            type: String,
            required:true,
        },
        password:{
            type: String,
            required:true,
        },
        adresse: {
            type: String,
            required: false,
        },
        telephone: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;