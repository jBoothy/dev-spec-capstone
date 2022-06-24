const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Client } = require('pg');


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


app.get('/api/currentCustomerList', (req, res)=>{
  client.query(`SELECT * FROM customers`, (err, resp)=>{
    if(!err){
        res.status(200).send(resp.rows)
    } else{
        console.log(err.message)
    }
    client.end;
})
})



app.post('/api/addcustomer', ( req, res ) => {
  res.status(200).send('weiners')
  console.log(req.body)
})


const port = process.env.PORT || 8675

app.listen(port, ()=>{
    console.log(`Server is running on: ${port}`)
});