const router = (app) => {
    const productsCtrl = require('../controllers/products');
    
      // CRUD Products
      app.get('/products', productsCtrl.getProducts);
    
      app.get("/productsById/:id",productsCtrl.getProductsById);
    
      app.post("/post_products",productsCtrl.postProducts);
    
      app.delete("/delete_products/:id",productsCtrl.deleteProducts);
    
      app.put("/put_products/:id",productsCtrl.putProducts);
      
    }
    
    module.exports = router