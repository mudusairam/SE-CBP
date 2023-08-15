const exp=require('express')
const loanApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')

//apply loan
loanApp.use(exp.json())
loanApp.post('/apply-loan',expressAsyncHandler(async(request,response)=>{
    const loanapplycollection=request.app.get('loanapplycollection')
    const userObj=request.body
    await loanapplycollection.insertOne(userObj)
    response.status(201).send({message:"Loan Applied"})
}))

module.exports=loanApp