var app =  require('../app');
var Item = require('../models/Item')
const assert = require('assert');


const testingValues = [
    {name:"Naranja", price:1000, category:"frutas"},
    {name:"Pepsi", price:3000, category:"bebida"},
    {name:"Jabón", price:4000, category:"baño"}
]

describe('Artículos', ()=>{

    describe('Creación', () =>{

        beforeEach((done)=>{
            //Se borran todos los documentos
            Item.deleteMany({}).then(async ()=>{
                for(let i = 0; i<testingValues.length; i++){
                    let item = new Item(testingValues[i])
                    await item.save()
                }
                done();
            })
        })

        it('Crear un artículo', (done)=>{
            var item = new Item({name:"test"})
            item.save()
            .then(res =>{
                Item.findOne({name:'test'})
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
            let items;
            Item.find({})
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

        it('Obtención de un articulo', (done)=>{
            Item.findOne({name: testingValues[0].name})
            .exec()
            .then((result) =>{
                assert(result.name == testingValues[0].name)
                assert(result.price == testingValues[0].price)
                assert(result.category ==  testingValues[0].category )
                done();
            })
            .catch(e =>{
                console.log(e)
                done();
            })
        })
    })
})