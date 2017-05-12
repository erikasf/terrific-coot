var express = require('express');
var login = require('../database/login')

const loginRoutes = new express.Router();

loginRoutes.get('/', (req, res) {
    login.viewOneLogin(id)
        .then(result => {
            console.log('result', result)
            res.status(200).json(result)
        })
        .catch(error => {
            res.json({
                message: error.message,
                error: error
            })
        })
});
loginRoutes.post('/login/:id', (req, res) {
    const {
        id
    } = req.params
    const {
        email,
        password
    } = req.body

    login.updateLogin(id)
        .then(result => {
            console.log('result', result)
            res.redirect('/login')
        })
        .catch(error => {
            res.json({
                message: error.message,
                error: console.error();
            })
        })
});
loginRoutes.get('/',(req,res){
  login.createLogin(email, password)
  .then(result =>{
    console.log('result',result)
    res.status(200).json(result)
  })
  .catch(error =>{
    res.json({
      message:error.message,
      error: error
    })
  })
});
loginRoutes.delete('/:id',(req,res){
  const{id}= req.params
  login.deleteLogin(id)
  .then(result =>{
    res.status(200).json(result)
  })
  .catch(error=>{
    res.json({
      message:error.message,
      error: error
    })
  })
})

module.exports = loginRouter;
