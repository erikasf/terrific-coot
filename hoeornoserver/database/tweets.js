const db = ('./init')

const VIEW_ALL_TWEETS ='select * from tweets'
const VIEW_ONE_TWEETS = 'select * from tweets where id =$1'
const UPDATE_TWEETS ='update tweets set tweets= $1'

// insert into tweets (tweets) values('trump is not cool !')
const CREATE_TWEETS ='insert into tweets(tweets)'
const DELETE_TWEETS = 'delete from tweets where id = $1'

const tweets = {
  viewAllTweets:()=>{
    return db.many(VIEW_ALL_TWEETS)
  },
  viewOneTweets:(id)=>{
    return db.one(VIEW_ONE_TWEETS,[id])
  },
  updateTweets:(tweet)=>{
    return db.one(UPDATEL_TWEETS,[email, password])
  },
  createTweets:(tweet)=>{
    return db.one(CREATE_TWEETS,[email,password])
  },
  deleteTweets:(id)=>{
    return db.none(DELETE_TWEETS,[id])
  }
}

module.exports = tweets
