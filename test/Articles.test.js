var app =  require('../app');
var Article = require('../models/Article')
const assert = require('assert');


const testingValues = [
    {name:"Naranja", price:1000, category:"frutas"},
    {name:"Pepsi", price:3000, category:"bebida"},
    {name:"Jabón", price:4000, category:"baño"}
]

describe('Articles', ()=>{

    describe('Creación', () =>{

        beforeEach((done)=>{
            //Se borran todos los documentos
            Article.deleteMany({}).then(async ()=>{
                for(let i = 0; i<testingValues.length; i++){
                    let article = new Article(testingValues[i])
                    await article.save()
                }
                done();
            })
        })

        it('Crear un artículo', (done)=>{
            var article = new Article({name:"test"})
            article.save()
            .then(res =>{
                Article.findOne({name:'test'})
                    .then(res => {
                        assert(res.name == 'test');
                        done();
                }).catch(e=>{
                    console.log(e)
                    done();
                })
            })
        })

        it('Validando creación de articulos, deben ser tres.', (done) =>{
            let articles;
            Article.find({})
            .exec()
            .then((results) =>{
                assert(results.length === 3);
                results.forEach((el,index) =>{
                    assert(el.name == testingValues[index].name)
                    assert(el.price == testingValues[index].price)
                    assert(el.category == testingValues[index].category)
                })
                done();

            })
            .catch(e =>{
                console.log(e)
                done();
            })
        })
    })
})