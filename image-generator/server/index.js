const PORT = 9000
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const app = express();
app.use(cors())
app.use(express.json())
require('dotenv').config;
const OpenAIApi = require("openai");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + "-" + file.originalname)
    }
})
const upload = multer({ storage: storage }).single('file')
let filePath;


const configuration = {
    apiKey: process.env.apiKey
};



const openai = new OpenAIApi(configuration);

app.post('/api/images', async(req, res) => {
    try{
        const response = await openai.images.generate({
            prompt: req.body.searchTerm,
            n: 3,
            size: "1024x1024"
        })
        console.log(response);
        res.send(response);
    }catch(error){
        console.error(error);
    }
    
})

app.post('/api/upload', async(req, res) => {
    upload(req, res, (err) => {
        if(err instanceof multer.MulterError){
            return res.status(500).json(err);
        }else if (err){
            return res.status(500).json(err);
        }

        filePath = req.file.path;
    })
})

app.post('/api/variations', async(req, res) => {
    try{
        console.log("Filepath", filePath)
        const response = await openai.images.createVariation({
            image: fs.createReadStream(filePath),
            n: 3,
            size: "1024x1024"
        })
        console.log(response)
        res.send(response)
    }catch(error){
        console.log(error)
    }
})

app.listen(PORT, () => console.log('Your server is running on PORT ' +  PORT))