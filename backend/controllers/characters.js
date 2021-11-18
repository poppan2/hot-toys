const express = require('express')
const router = express.Router();

const Characters = require('../models/characters')

router.get('/', (req,res)=>{
    Characters.find({}).then((characters)=>{
        res.json({
            status: 200,
            characters: characters})
    })
})

router.post('/', (req,res)=>{
    Characters.create(req.body).then(()=>{
        Characters.find({}).then((characters)=>{
            res.json({
                status: 201,
                characters: characters})
        })
    })
})

router.delete('/:id', (req, res)=>{
    Characters.findByIdAndDelete(req.params.id).then(()=>{
        Characters.find({}).then((characters)=>{
            res.json({
                status: 204,
                characters: characters
            })
        })
    })
})

router.put('/:id', (req,res)=>{
    Characters.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(()=>{
        Characters.find({}).then((characters)=>{
            res.json({
                status: 200,
                characters: characters
            })
        })
    })
})

module.exports = router;