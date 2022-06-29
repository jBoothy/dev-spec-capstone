const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();


const app = module.exports = express()
// app.use(express.static(path.join(__dirname, '../dist')));
app.use( express.static( `${__dirname}/../build` ) );
app.use(express.static('../dist'));


app.use(cors())

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "jcb042915",
    database: "postgres"
})

client.connect();

// client.query(`SELECT * FROM customers`, (err, res)=>{
//     if(!err){
//         console.log(res.rows)
//     } else{
//         console.log(err.message)
//     }
//     client.end;
// })


app.get('/api/customers', (req, res)=>{
  client.query(`SELECT * FROM customers`, (err, resp)=>{
    if(!err){
        res.status(200).send(resp.rows)
    } else{
        console.log(err.message)
    }
    client.end;
})
})

app.get(`/api/customers/:id`, (req, res)=>{
    client.query(`SELECT * FROM customers WHERE id = ${req.params.id}`, (err, resp)=>{
      if(!err){
          res.status(200).send(resp.rows)
      } else{
          console.log(err.message)
      }
      client.end;
  })
  })

app.post('/api/customers', jsonParser, (req, res)=>{
  client.query(`INSERT INTO customers (firstname, lastname, address, phonenumber, rep) 
  VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.address}', '${req.body.phonenumber}', '${req.body.rep}')
  `, (err, resp)=>{
    if(!err){
        res.status(200).send('Success')
    } else{
        console.log(err.message)
    }
    client.end;
})
})

app.delete('/api/customers/:id', (req, res)=>{
  // console.log("REQ PARAMS ID ->", req.params.id)
  let sql = `DELETE FROM customers WHERE id = ${req.params.id}`
  // console.log('SQL ->', sql)
  
  client.query(sql, (err, resp)=>{
    if(!err){
        res.status(200).send('Success')
    } else{
        console.log(err.message)
    }
    client.end;
})})

const port = process.env.PORT || 8675

app.listen(port, ()=>{
    console.log(`Server is running on: ${port}`)
});