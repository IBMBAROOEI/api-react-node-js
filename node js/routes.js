 
 
 const express =require ("express")
 const router = express.Router();
 const {registerpost} = require("./validation.js")
const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "test_1",
    password: "12345",
    port: 5432
  });
  client.connect();
  client.query("Select * from mb",(err,res)=>{
      if(!err){
        console.log(res)
      }
      else{
          console.log("database not connect ")
      }
      client.end;
  })

  




    router.post("/api/register",(registerpost),(req,res,next)=>{

 
        var cols = [req.body.name];

        client.query('INSERT INTO mb(name) VALUES($1) RETURNING *', cols, function (err, result) {
         
            if (err) {
                console.log("Error Saving : %s ", err);
            }
          res.send("ok");
        });
        

  })


  router.get("/api/get",(req,res)=>{

 
    client.query('SELECT * FROM mb', function (err, result) {
        console.log(result);
        if (err) {
       
            res.status(400).send(err);
        }
        res.json(result.rows );
    });

  })




  router.get("/api/get/:id",(req,res)=>{
    

    const {id} =req.params;
    client.query('SELECT * FROM mb  WHERE id =$1',[id], function (err, result) {
        console.log(result);
        if (err) {
       
            res.status(400).send(err);
        }
        res.json({data: result.rows });
    });

  })

  router.put("/api/put/:id",(req,res)=>{
    
    const { id } = req.params;
    const { name } = req.body;
  
    client.query( "UPDATE mb SET name = $1 WHERE id = $2", [name,id]);
  
     
    res.json("Todo was updated!");

    });

     router.delete ("/api/del/:id",(req,res)=>{
        var id=req.params.id
        client.query("DELETE FROM mb WHERE id=$1" ,[id],function(err, result){
    
        if(err){
            console.log("errr")
        }
        res.send("jdjwojdojdjoj")
        });
});

  module.exports = router;