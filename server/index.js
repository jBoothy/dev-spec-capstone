const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Client } = require('pg');
// const bodyParser = require('body-parser');

const jsonParser = express.json();


const app = module.exports = express()
// app.use(express.static(path.join(__dirname, '../dist')));
app.use( express.static( `${__dirname}/../build` ) );
app.use(express.static('../dist'));


app.use(cors())
// MAC
// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "jcb042915",
//     database: "postgres"
// })
// PC
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5151,
    password: "jcb042915",
    database: "postgres"
})

client.connect();

// Get for Customer List
app.get('/api/customers', (req, res)=>{
  client.query(`
  SELECT * FROM customers
  ORDER BY firstname ASC
  `
  , (err, resp)=>{
    if(!err){
        res.status(200).send(resp.rows)
    } else{
        console.log(err.message)
    }
    client.end;
})
})

// Get for Customer Profile
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

// Put for Customer Profile
app.put('/api/customers/:id', jsonParser, (req, res)=>{
// console.log(req.body)
let sql = `
UPDATE customers 
SET firstname = '${req.body.firstname}', lastname = '${req.body.lastname}', address = '${req.body.address}', rep = '${req.body.rep}', phonenumber = '${req.body.phonenumber}'  
WHERE id = ${req.params.id}
;`
console.log('SQL ->', sql)

client.query(sql, (err, resp)=>{
    if(!err){
        res.status(200).send('Success')
    } else{
        console.log(err.message)
    }
    client.end;
})
})

// Post for Add Customer
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

// Delete for Customer List
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

// Post for Add Rep
app.post('/api/reps', jsonParser, (req, res)=>{
    client.query(`
    INSERT INTO reps (firstname, lastname)
    VALUES ('${req.body.firstname}', '${req.body.lastname}')
    `, (err, resp)=>{
      if(!err){
          res.status(200).send('Success')
      } else{
          console.log(err.message)
      }
      client.end;
  })
})

// Get for Rep List
app.get('/api/reps', (req, res)=>{
    client.query(`
    SELECT * FROM reps
    ORDER BY firstname DESC
    `
    , (err, resp)=>{
        if(!err){
            res.status(200).send(resp.rows)
        } else{
            console.log(err.message)
        }
        client.end;
    })
})

// Delete for Rep List
app.delete('/api/reps/:id', (req, res)=>{
    // console.log("REQ PARAMS ID ->", req.params.id)
    let sql = `DELETE FROM reps WHERE id = ${req.params.id}`
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