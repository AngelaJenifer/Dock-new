const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SignupModel = require('./models/SignupModel')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Dock");

app.post('/signup', (req, res) => {

SignupModel.findOne({ userid:req.body.userid })
.then(existingUser => {
    if (existingUser){
        res.status(400).json({ error: 'User already exists' })
    }
    else{
        SignupModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error : 'could not create user' }))
    }
})
.catch(err => res.status(500).json({ error : 'server error' }))
    
})

app.post('/login', (req, res) => {
    const {userid, password} = req.body;
    SignupModel.findOne({userid: userid})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else {
                res.json({ status : "Error" , message : "Password is incorrect"})
            }
        }else {
            res.json({ status : "Error" , message : "userid does not exist"})
        }
    })
    .catch(err => res.status(500).json({ status : "Error" , message : "server error"}))
})


app.listen(3000, () => {
    console.log('Server is running')
})