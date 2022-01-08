import express from  'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
dotenv.config();

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'healthgram',
});

const app=express();

app.use(express.json());


db.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('connected to database');
    }
})



app.get('/:bookingId',(req,res)=>{
    let sql=`SELECT * FROM tbl_booking WHERE booking_id=${req.params.bookingId}`;
    db.query(sql,(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
  
})

app.post('/signup',(req,res)=>{
    req.body
})




app.get('/courses',(req,res)=>{
    res.json({
        courses:[
            {id:1,name:'course1'},
            {id:2,name:'course2'},
            {id:3,name:'course3'}
        ]
    });
})




app.listen(4000,()=>console.log("listening on port 4000"));