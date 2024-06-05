const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SignupModel = require('./models/SignupModel')
const CompanyModel = require('./models/CompanyModel');
const TruckModel = require('./models/TruckModel');

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

//company crud starting
// Fetch companies
app.get('/companies', async (req, res) => {
    try {
        const companies = await CompanyModel.find();
        res.json({ success: true, data: companies });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

//create data // save data in mongo //install rapid api in extension
//"http://localhost:8080/create" {name,emai,mobile}
app.post('/create', async (req, res) => {
    try {
        const company = new CompanyModel(req.body);
        await company.save();
        res.json({ success: true, message: 'Company created successfully' });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

//update
//"http://localhost:8080/update" {id,name,emai,mobile}

app.put('/update', async (req, res) => {
    try {
        const company = await CompanyModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
        res.json({ success: true, message: 'Company updated successfully', data: company });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

//delete
//"http://localhost:8080/delete/id" 

app.delete('/delete/:id', async (req, res) => {
    try {
        await CompanyModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Company deleted successfully' });
    } catch (err) {
        console.error("Error deleting company:", err.message);
        res.json({ success: false, message: err.message });
    }
});

//company crud ending


//truck list crud starting
// Fetch trucklist
app.get('/trucks', async (req, res) => {
    try {
        const companies = await TruckModel.find();
        res.json({ success: true, data: companies });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

//create data // save data in mongo //install rapid api in extension
//"http://localhost:8080/create" {name,emai,mobile}
app.post('/createtruck', async (req, res) => {
    try {
        const company = new TruckModel(req.body);
        await company.save();
        res.json({ success: true, message: 'Company created successfully' });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

//update
//"http://localhost:8080/update" {id,name,emai,mobile}

app.put('/updatetruck', async (req, res) => {
    try {
        const company = await TruckModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
        res.json({ success: true, message: 'Company updated successfully', data: company });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

//delete
//"http://localhost:8080/delete/id" 

app.delete('/deletetruck/:id', async (req, res) => {
    try {
        await TruckModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Company deleted successfully' });
    } catch (err) {
        console.error("Error deleting company:", err.message);
        res.json({ success: false, message: err.message });
    }
});

// truck list crud ending

app.listen(5000, () => {
    console.log('Server is running')
})
