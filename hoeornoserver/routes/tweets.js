var express = require('express');
var tweets = require('../database/tweets')

const tweetRoutes = new express.Router();

tweetRoutes.get('/', function(req, res){
  tweets.viewAllTweets()
  .then(result=>{
    console.log('result', result)
    res.status(200).json(result)
  })
  .catch(error =>{
    res.json({
      message:error.message,
      error: error
    })
  })
})

tweetRoutes.get('/', (req, res) {
    tweets.viewOneTweets(id)
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
tweetRoutes.post('/tweets/:id', (req, res) {
    const {
        id
    } = req.params
    const {
      tweets
    } = req.body

    tweets.updateTweets(id)
        .then(result => {
            console.log('result', result)
            res.redirect('/tweets')
        })
        .catch(error => {
            res.json({
                message: error.message,
                error: console.error();
            })
        })
});
tweetRoutes.get('/',(req,res){
  tweets.createTweets(tweets)
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
tweetRoutes.delete('/:id',(req,res){
  const{id}= req.params
  tweets.deleteTweets(id)
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



/////////////////////////////////
//Twitter API//
var Twit = require('twit');
var config = require('/config.js');
  // console.log(config)
var T = new Twit(config);


var params = {
  q: 'Trump',
  count: 1
}

T.get('search/tweets', params, getData);

function getData(err, data, response){
  var tweets = data.statuses;
  for(var i = 0 ; i < tweets.length; i++){
    console.log(tweets[i].text);
  }
  // console.log(data)
};


var tweet = {
  status: '#hoorno you may be a hoe...'
}
T.post('statuses/update', tweet, tweeted);

function tweeted(err,data, response){
  if(err){
    console.log('something went wrong');
  } else {
    console.log('It worked!');
  }
}

var tweetId ={
  id:''
}
T.post('statues/destroy/:id',tweetId);

function deleteTweet(err,data, response){
  if(err){
    console.log('something went wrong');
  } else {
    console.log('It worked!');
  }
}
/////////////////////////////////////


module.exports = tweetRoutes
