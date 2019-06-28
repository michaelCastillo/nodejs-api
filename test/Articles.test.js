var app =  require('../app');
var Article = require('../models/Article')
const assert = require('assert');

describe('Articles', ()=>{

    describe('Creación', () =>{
        it('Crear un artículo', (done)=>{

            /*
            let article = new Article({name:"test"})
            try{

                await article.save()
                Article.findOne({name:'test2'})
                            .then(res => {
                                assert(res.name == 'test');
                        })
            }catch(e){
                console.log(e)
            }
            */

            
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
    })
})