
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require("body-parser");
var Article = require('./models/Article');
const app = express();

//Para usos de mensajes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var MongoPort = 80
var URL = "34.68.167.61"
var URI = `mongodb://${URL}:${MongoPort}/nodeTest`

const API_PORT = 9000;

//Conexion con la base de datos
mongoose.connect(`${URI}`, {useNewUrlParser: true});

//Servicios

app.get('/', async (req,res)=>{
    console.log("First service! ");
    res.status(200).sendFile(__dirname + "/PresentationFile.html")
})

// Servicio de obtención de todos los articulos
app.get('/articles' , async (req,res)=>{
    Article.find()
    .exec()
    .then((result) =>{
        res.status(200).send(result)
    })
    .catch(e => {
        callback.status(500).send({
            message: `Error al obtener los articulos, ${e}`
        })
    })
})

app.post('/articles',async (req, res) =>{
    let {name} = req.body;
    let article = new Article({name:name});
    article.save().then(result =>{
        console.log("Exito! ")
        res.status(200).send({
            message:"Articulo guardado"
        })
    }).catch(e =>{
        res.status(500).send({
            message: `Error al guardar el articulo, ${e}`
        })
    })
})



// Inicio de API
app.listen(API_PORT, () => {
    console.log(`server running on port ${API_PORT}`)
  });  
module.exports = app
