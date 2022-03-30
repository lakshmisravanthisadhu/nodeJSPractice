const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')


router.get('/', async(req,res) => {
    try{
           const customers = await Customer.find()
           res.json(customers)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
           const customer = await Customer.findById(req.params.id)
           res.json(customer)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const customer = new Customer({
        name: req.body.name,
        Email: req.body.Email,
        AccountNumber: req.body.AccountNumber,
        AccountBalance:req.body.AccountBalance
    })

    try{
        const customerRes =  await customer.save() 
        res.json(customerRes)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        customer = await Customer.updateOne({_id:req.params.id},req.body);
        // const a1 = await alien.save()
        res.send("updated") 
    }
    catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=>{
    try{
        const customer=await Customer.findById(req.params.id)
        await customer.remove()
        res.send('deleted');
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router