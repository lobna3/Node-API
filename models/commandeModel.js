const mongoose = require('mongoose')
const { Schema } = require("mongoose")
const Client = require('./clientModel')

const commandeSchema = mongoose.Schema(
    {
        dateEmission: {
            type: String,
            required: true,
        },
        dateEcheance: {
            type: String,
            required: true,
           
        },
        total: {
            type: String,
            required: false,
        },
        totalTTc: {
            type: String,
            required: false,
        },
        remise: {
            type: String,
            required: false,
        },
        taxe: {
            type: String,
            required: false,
        },
        documentUrl: {
            type: String,
            required: false,
        },
        client: {
             type: Schema.Types.ObjectId,
              ref: Client, 
              required: true 
            },
    },
    {
        timestamps: true
    }
)


const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;