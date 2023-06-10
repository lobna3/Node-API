const router = (app) => {

    const clientsCtrl = require('../controllers/clients');
    
      // CRUD Clients
      app.get('/clients', clientsCtrl.getClients);
    
      app.get("/clientsById/:id",clientsCtrl.getClientById);
    
      app.post("/post_clients",clientsCtrl.postClients);
    
      app.delete("/delete_clients/:id",clientsCtrl.deleteClients);
    
      app.put("/put_clients/:id",clientsCtrl.putClients);
      
    }
    
    module.exports = router