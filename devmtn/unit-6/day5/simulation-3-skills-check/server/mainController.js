

module.exports= { 

      getUserPosts:(req,res)=> {
       const {id} = req.params,
            db = req.app.get('db');

        db.get_user_posts(id)
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err));
    }

}