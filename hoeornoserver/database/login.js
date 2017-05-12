const db = ('./init')

const VIEW_ONE_LOGIN ='select * from login where id =$1'
const UPDATE_LOGIN ='update tweets set email= $1, password= $2'

// insert into login (email, password)
 values('jnware@gmail.com', 'password')
const CREATE_LOGIN =  'insert into login ($1, $2)'
const DELETE_LOGIN = 'delete from login where id = $1'

const login ={
  viewOneLogin:(id)=>{
    return db.one(VIEW_ONE_LOGIN,[id])
  },
  updateLogin:(email, password)=>{
    return db.one(UPDATEL_LOGIN,[email, password])
  },
  createLogin:(email, password)=>{
    return db.many(CREATE_LOGIN,[email,password])
  },
  deleteLogin:(id)=>{
    return db.none(DELETE_LOGIN,[id])
  }
}

module.exports = login
