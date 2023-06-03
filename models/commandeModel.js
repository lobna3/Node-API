const mongoose = require('mongoose')

const commandeSchema = mongoose.Schema(
    {
        dateEmission: {
            type: String,
            required: true,
        },
        dateEcheance: {
            type: Number,
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
        }
    },
    {
        timestamps: true
    }
)


const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;