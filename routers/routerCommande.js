const router = (app) => {
    const commandesCtrl = require('../controllers/commandes');
    
      // CRUD Commandes
      app.get('/commandes', commandesCtrl.getCommandes);
    
      app.get("/commandesById/:id",commandesCtrl.getCommandesById);
    
      app.post("/post_commandes",commandesCtrl.postCommandes);
    
      app.delete("/delete_commandes/:id",commandesCtrl.deleteCommandes);
    
      app.put("/put_commandes/:id",commandesCtrl.putCommandes);
      
    }
    
    module.exports = router