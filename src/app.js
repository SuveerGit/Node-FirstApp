const express = require('express')
const path = require('path')
const hbs= require('hbs')
const { response } = require('express')
// const { response } = require('express')
console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const app = express()
const GeoCode= require('./Utils/GeoCode')
//get heroku port
const port = process.env.PORT || 3000
const publicDirPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
//Set up handle bars
app.set('view engine','hbs')
app.set('views', viewPath);

hbs.registerPartials(partialsPath)

//Setup static directories to serve
app.use(express.static(publicDirPath))

//404 error


app.get('',(req, res)=>{
    res.render('index',{
        title:'Weather Application',
        CommandoCode: 123,
        Author:'Suveer Agraharam'
    })
})

app.get('/About',(req, res)=>{
    res.render('about',{
        title:'About Template',
        CommandoCode: 456,
        Author:'Jerry'
    })
})

app.get('/Help',(req, res)=>{
    res.render('help',{
        title:'Help Template',
        CommandoCode: 789,
        Author:'Suveer'
    })
})


app.get('/Help/*',(req,res)=>{
    // res.send('Help article not found')
    res.render('404Error',{
        ErrorReqPage:'Help Error Page'
    } )

})


app.get('/Weather',(req,res)=>{
    // res.send('Help article not found')
    if(!req.query.address){
        return res.send({error: "Address not provided"})
    }
    

     GeoCode(req.query.address,(error, {temperature})=>{
         res.send({
             Result: temperature
         }) 
        })  
    })
    // res.send({
    //     Location : req.query.address,
    //     Forecast  :"Heavy Rain Expected"
    // })
    // res.render('404Error',{
    //     ErrorReqPage:'Help Error Pagde'
    // } )


app.get('/products',(req,res)=>{
    if(!req.query.Games){
return res.send({
    error: "Fail search"
}
)
    }
console.log(req.query.Games)
    res.send({
        products:[]
    })
})

app.get('*',(req,res)=>{
    // res.send('my 404 page')
    res.render('404Error',{
        ErrorReqPage:'Generic Error Page'
    } )
})
    
//set rout
// app.get('',(req,res)=>{
// // res.send

// res.send('<h1>Weather</h1>')
// })


// app.get('/Weather',(req,res)=>{
//     res.send('Weather')
//     })
    
//     app.get('/About',(req,res)=>{
//     res.send('Title')
//     })
// app.get('/help',(req,res)=>{
// res.send({
// name:'Andrew',
// Age:27
// })
// })

//app.com
// /app.com./help
//app.com/about

//Run APp server

app.listen(port, ()=>{
    console.log('server is up at port 3030'+port)
})



//commands
// app.listen
// app.get
// app.use
// res.send
// path.join(__dirname,'../public')
//app.set
//handlebar for dynamic content
//npm hbs- express view engine for handle bar
// hbs.registerPartials(partialsPath)
// Simply app.use means “Run this on ALL requests”
// app.get means “Run this on a GET request, for the given URL”

// Git status, git add [ to stage ], git commit -m " message" [ to commit]
//ssh-keygen -t rsa -b 4096 -C "agraharamsuveer@gmail.com"
// $ eval "$(SSH-agent -s)"
// Agent pid 1364
//cat rsa.pub [ to get rsa key]


//to check ssh is set up succesful : $ ssh -T git@github.com
