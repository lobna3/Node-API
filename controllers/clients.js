const Client = require('../models/clientModel')
const mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

//CRUD CLIENT

const getClients = async(req, res) => {
    try {
        
        const clients = await Client.aggregate([
            {
              $lookup: {
                from: "commandes",
                localField: "_id",
                foreignField: "client",
                as: "commandes",
              },
            },
          ]);
       res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const getClientById = async(req, res) =>{
    try {
        const {id} = req.params;
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const postClients =async(req, res) => {
    try {
        const client = await Client.create(req.body)
        res.status(200).json(client);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

const putClients =async(req, res) => {
    try {
        const {id} = req.params;
        const client = await Client.findByIdAndUpdate(id, req.body);
        // we cannot find any client in database
        if(!client){
            return res.status(404).json({message: `cannot find any client with ID ${id}`})
        }
        const updatedClient = await Client.findById(id);
        res.status(200).json(updatedClient);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const deleteClients=async(req, res) =>{
    try {
        const {id} = req.params;
        const client = await Client.findByIdAndDelete(id);
        if(!client){
            return res.status(404).json({message: `cannot find any client with ID ${id}`})
        }
        res.status(200).json(client);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports= {
    getClients,
    getClientById,
    postClients,
    putClients,
    deleteClients,
};