const Commande = require('../models/commandeModel')
const mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

//CRUD COMMANDE

const getCommandes = async(req, res) => {
    try {
        var commandes = await Commande.find({}).populate('client');
        res.status(200).json(commandes);
       
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};



const getCommandesById = async(req, res) =>{
    try {
        const {id} = req.params;
        const commande = await Commande.findById(id).populate('client');
        res.status(200).json(commande);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const postCommandes =async(req, res) => {
    try {
        const commande = await Commande.create(req.body)
        res.status(200).json(commande);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

const putCommandes =async(req, res) => {
    try {
        const {id} = req.params;
        const commande = await Commande.findByIdAndUpdate(id, req.body);
        // we cannot find any commande in database
        if(!commande){
            return res.status(404).json({message: `cannot find any commande with ID ${id}`})
        }
        const updatedCommande = await Commande.findById(id);
        res.status(200).json(updatedCommande);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const deleteCommandes=async(req, res) =>{
    try {
        const {id} = req.params;
        const commande = await Commande.findByIdAndDelete(id);
        if(!commande){
            return res.status(404).json({message: `cannot find any commande with ID ${id}`})
        }
        res.status(200).json(commande);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports={
 getCommandes,
 getCommandesById,
 postCommandes,
 putCommandes,
 deleteCommandes,
};