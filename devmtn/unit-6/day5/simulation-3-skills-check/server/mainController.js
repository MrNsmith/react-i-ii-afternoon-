

module.exports= { 

        logMeIn:  async(req, res) => { 
            const db = req.app.get('db')
            if(req.session.user){
                console.log(req.session.user.user_id,"logMeIn controller")
            const me = await db.get_user_id(req.session.user.user_id)
            res.status(200).send(me[0])
            }
        
        },
      searchPostByTitle: (req,res) =>{
          const db = req.app.get('db'),
          {title} = req.params;
          db.search_post(title)
          .then(post => res.status(200).send(post))
        .catch(err => res.status(500).send(err))
      },

      getUserPosts:(req,res)=> {
       const {id} = req.params,
            db = req.app.get('db');

        db.get_user_posts(id)
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err));
         },
         deletePost: (req, res)=>{
           const{id}= req.params,
           db = req.app.get('db');
           console.log(id)
           db.delete(id)
           .then(() => res.sendStatus(200))
           .catch(err => res.status(500).send(err))
         }

}