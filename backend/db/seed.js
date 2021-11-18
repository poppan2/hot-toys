const Character = require('../models/characters')
const charactersData = require('../charactersData.json')

Character.deleteMany({}).then(()=>{
    Character.insertMany(charactersData, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Characters Added!')
        }
        process.exit()
    })
})