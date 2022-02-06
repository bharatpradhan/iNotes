const express = require('express');
const app = express();
const notes = require('./data/notes')
const dotenv = require('dotenv')
dotenv.config();
const PORT =  process.env.PORT || PORT



app.get('/',(req,res)=>{
    res.send("server is working");
})

app.get('/api/notes',(req,res)=>{
    res.send(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find(el => el._id===req.params.id)
    res.send(note)
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})