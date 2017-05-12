var express = require('express');
var tweets = require('../database/tweets')
const tweetRoutes = new express.Router();
var arr

var tag = '@Pontifex'
// tweetRoutes.get('/', function(req, res){
//   tweets.viewAllTweets()
//   .then(result=>{
//     console.log('result', result)
//     res.status(200).json(result)
//   })
//   .catch(error =>{
//     res.json({
//       message:error.message,
//       error: error
//     })
//   })
// })
//
// tweetRoutes.get('/', (req, res) {
//     tweets.viewOneTweets(id)
//         .then(result => {
//             console.log('result', result)
//             res.status(200).json(result)
//         })
//         .catch(error => {
//             res.json({
//                 message: error.message,
//                 error: error
//             })
//         })
// });
// tweetRoutes.post('/tweets/:id', (req, res) {
//     const {
//         id
//     } = req.params
//     const {
//       tweets
//     } = req.body
//
//     tweets.updateTweets(id)
//         .then(result => {
//             console.log('result', result)
//             res.redirect('/tweets')
//         })
//         .catch(error => {
//             res.json({
//                 message: error.message,
//                 error: console.error();
//             })
//         })
// });
// tweetRoutes.get('/',(req,res){
//   tweets.createTweets(tweets)
//   .then(result =>{
//     console.log('result',result)
//     res.status(200).json(result)
//   })
//   .catch(error =>{
//     res.json({
//       message:error.message,
//       error: error
//     })
//   })
// });
// tweetRoutes.delete('/:id',(req,res){
//   const{id}= req.params
//   tweets.deleteTweets(id)
//   .then(result =>{
//     res.status(200).json(result)
//   })
//   .catch(error=>{
//     res.json({
//       message:error.message,
//       error: error
//     })
//   })
// })
//
//

/////////////////////////////////
//Twitter API//
var Twit = require('twit');

  // console.log(config)
var T = new Twit({
  consumer_key:'yJ7tm4AiTldEkp6n7UMQk5PzO',
  consumer_secret:'ZrpiI07K4L5pmrp8EcUFKQU4UYtKcJfp1P49oRzrJlSOa93mh3',
  access_token:'862352063430238208-sVCJt4QIrCCzt1iQ0NjzTdu4yiC3HsN',
  access_token_secret:'CSMUQfj3aue7gqQfy5q1JZ0reK85cROOfgSLPUEI449IP'
});
//@lindsaylohan
//@LisaBronwyn
// @Pontifex
var params = {
  q: '@Pontifex',
  count: 70
}

T.get('search/tweets', params, getData);

function getData(err, data, response){
  var tweets = data.statuses;
  var arr;
  var tweetStr = ""
  for(var i = 0 ; i < tweets.length; i++){

    tweetStr += tweets[i].text

  }
  // hoeStatus( callback(arr).reduce(function(acc, val) { return acc + val; }, 0))
  watson(tweetStr)
  // console.log(tweetStr);
  // console.log(data)
};


////////////////////////////////////////////
//Watson API//

function watson(tweets){
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const fs = require('fs');

const personality_insights = new PersonalityInsightsV3({
  username: '5cd1b0ee-5846-43c5-9c97-b898d49dca4d',
  password: 'm6JlocmCSTzT',
  version_date: '2016-10-19'
});

/*
 * English example:
 *   'text' parameter contains the input text.
 */
personality_insights.profile(
  {
    text: tweets,
      consumption_preferences: true
  },
  function(err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      // console.log(JSON.stringify(response.personality[0].name , null, 2));
      // console.log(JSON.stringify(response.personality[0].percentile , null, 2));
      var person1 = response.personality.map(function(x){
        return x.percentile

      })
      var status = hoeStatus( callback(person1).reduce(function(acc, val) { return acc + val; }, 0))
      subStatus(status)
    }

  }
);

}

///HOORNO Algo

function hoeStatus(num){
  if(num >= 220){
    return "@hoorno says: " + tag + " you may be a hoe."
  }else if(num < 220){
    return "@hoorno says: " + tag + " Nope... not a hoe."
  }else{
    return "@hoorno says: "  + tag + " you may be a hoe."
  }
}

 function callback(arr){
    let newArr =[]
    for(index=0; index<arr.length; index++){
      if(index=== 1 || index === 4){
        newArr.push(arr[index]* -1*100)

    }else{
      newArr.push(arr[index]*100)
    }
  }
  return newArr

}
// hoeStatus( callback(arr).reduce(function(acc, val) { return acc + val; }, 0))
// /*
function subStatus(status){
  var tweet = {
    status: status
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err,data, response){
    if(err){
      console.log('something went wrong');
    } else {
      console.log('It worked!');
    }
  }
}
//
// var tweetId ={
//   id:''
// }
// T.post('statues/destroy/:id',tweetId);
//
// function deleteTweet(err,data, response){
//   if(err){
//     console.log('something went wrong');
//   } else {
//     console.log('It worked!');
//   }
// }
/////////////////////////////////////
