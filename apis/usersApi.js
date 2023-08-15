const exp=require('express')
const userApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

//user register
userApp.use(exp.json())
userApp.post('/register',expressAsyncHandler(async(request,response)=>{
    const userscollection=request.app.get('userscollection')
    const userObj=request.body
    const userOfDb=await userscollection.findOne({email:userObj.email})
    if(userOfDb!=null)
    {
        response.send({message:"User already exists"})
    }
    else{
        const hashedPassword=await bcryptjs.hash(userObj.password,5)
        userObj.password=hashedPassword
        await userscollection.insertOne(userObj)
        response.status(201).send({message:"Registered successfully"})
    }
}))

//userlogin
userApp.use(exp.json())
userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    const userscollection=request.app.get('userscollection')
    const userObj=request.body
    const userOfDb=await userscollection.findOne({email:userObj.email})
    if(userOfDb==null)
    {
        response.send({message:"*Invalid username"})
    }
    else{
        const isExists=await bcryptjs.compare(userObj.password,userOfDb.password)
        if(isExists==false)
        {
            response.send({message:"*Invalid password"})
        }
        else{
            const jwtToken=jwt.sign({username:userObj.username},'pizzaApp',{expiresIn:86400})
            response.status(201).send({message:"User verified",token:jwtToken})
        }
    }
}))

//change password
userApp.use(exp.json())
userApp.post('/change-password',expressAsyncHandler(async(request,response)=>{
    const userscollection=request.app.get('userscollection')
    const userObj=request.body
    const userOfDb=await userscollection.findOne({username:userObj.username})
    if(userOfDb==null)
    {
        response.send({message:"Invalid username"})
    }
    else{
        const isSame=await bcryptjs.compare(userObj.currentPassword,userOfDb.password)
        if(isSame!=true)
        {
            response.send({message:"Invalid password"})
        }
        else{
            const newHashedPassoword=await bcryptjs.hash(userObj.newPassword,5)
            await userscollection.updateOne({username:userOfDb.username},{$set:{password:newHashedPassoword}})
            response.status(201).send({message:"Password changed successfully"})
        }
    }
}))

//forgot password
userApp.use(exp.json())
userApp.post('/forgot-password',expressAsyncHandler(async(request,response)=>{
    
}))



module.exports=userApp