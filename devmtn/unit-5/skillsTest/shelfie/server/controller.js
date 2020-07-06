module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },
    createProduct: (req, res)=>{
        const {name, price, img} = req.body,
                db = req.app.get('db');

         db.create_product({name, price, img})
        .then(()=> res.sendStatus(200))   
        .catch((err)=> res.status(500).send(err))   
    },
    editItem:(req,res)=>{
        const db = req.app.get('db'),
            {id} = req.params,
            {price} = req.body;

        db.edit_item({price, id})
        .then(()=> res.sendStatus(200))   
        .catch((err)=> res.status(500).send(err))   
    },
    deleteItem:(req, res)=>{
        const {id} = req.params,
                db = req.app.get('db');

         db.delete_Item({id})
         .then(()=> res.sendStatus(200))  
         .catch((err)=> res.status(500).send(err))     

    }

               


        
        

    
}