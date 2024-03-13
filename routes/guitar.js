const express=require("express")
const Guitar = require("../models/guitar.js")

const { v4: uuidv4 } = require('uuid');

const router=express.Router()

router.get("/getguitar",async(req,res)=>{
    let guitars=await Guitar.find()
    res.render("guitarpage",{
        guitars
    })
})
router.post("/addguitar", async(req, res) => {
    console.log(req.body);
    const {name,color,material,brand,price}=req.body
    const obj={
       name,
       color,
       material,
       brand,
       price,
        guitarId:uuidv4()
    }
    await Guitar.create(obj)
    res.redirect("/getguitar")
})


router.get("/delete/:guitarId",async(req,res)=>{
    let guitarId=req.params.guitarId
    await Guitar.deleteOne({guitarId})
    res.redirect("/getguitar")
})

router.get("/update/:guitarId",async(req,res)=>{
    let guitarId=req.params.guitarId
    const updateGuitar=await Guitar.findOne({guitarId})
    
    res.render("updateguitar",{
        updateguitar:updateguitar
    })
})

router.post("/updateguitar",async(req,res)=>{
    const {name,color,material,brand,guitarId}=req.body
    const newObj={
        name,
       color,
       material,
       brand,
        guitarId:uuidv4() 
    }
    
    await Guitar.updateOne({guitarId},newObj)

    res.redirect("/getguitar")
})

module.exports=router