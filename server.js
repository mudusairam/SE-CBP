//express
const exp=require('express')
const app=exp()
app.listen(4900,()=>console.log("Server is listening at port 4900...."))

//cors handling
const cors=require('cors')
app.use(cors())

//userApi
const userApp=require('./apis/usersApi')
app.use('/user',userApp)

//loanApi
const loanApp=require('./apis/loanApi')
app.use('/loan',loanApp)

//mongodb connection
const mclient=require('mongodb').MongoClient
mclient.connect('mongodb://127.0.0.1:27017/')
.then((dbRef)=>{
    const dbObj=dbRef.db('loandb')
    const userscollection=dbObj.collection('userscollection')
    const loanapplycollection=dbObj.collection('loanapplycollection')
    app.set('userscollection',userscollection)
    app.set('loanapplycollection',loanapplycollection)
    console.log("DB connected succesfully...")
})
.catch((err)=>{
    console.log(err)
})

//error handling middleware
const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorHandlingMiddleware)