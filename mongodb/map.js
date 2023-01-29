
const mongoose = require("mongoose");
const { isNumberObject } = require("util/types");

const db = require('./db.js');


const sctcSchema = new mongoose.Schema({
  fname: { type: String, minlength:2 , maxlength:42 , required: true    },
  lname: { type: String, minlength:2 , maxlength:42 , required: true    },

  email: { type: String},
  url: {type: String},
  date:{ type: String },
  year: { type:String},
  gender: {type:String},
  ntrp:  {type: String},
  address: {type: String},
  city: {type: String},
  zip: {type: String},
  mtype: {type: String},
  help: {type: String},
  other: {type: String},
  created: { type: Date, default: Date.now() },

});



alph=["a","b","c","d","e","f","g","h","j","i","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const nrand = () => Math.floor(Math.random()*26)

memb = {
  fname: "Roger",
  lname: "Okamoto",
  email: "rog@gmail.com",
  gender: "M",
  ntrp: "3.5",
  custom: 23231232

}

memb.custom = Date.now()

for (v in memb){
    console.log(v,memb[v])
}

const n = db.hi()
console.log("from db.js: " + n)


finder()


function finder(){

  mongodb_url = "mongodb+srv://cs157:tomato1349@cs157.qljr1c3.mongodb.net/EmpployeeApp?retryWrites=true&w=majority"
  var MongoClient = require('mongodb').MongoClient

  let conn = db.dbconnect()
  //https://stackoverflow.com/questions/8303900/mongodb-mongoose-findmany-find-all-documents-with-ids-listed-in-array
  const SCTCMembers = mongoose.model("sctcmembers", sctcSchema);
  let filter = {"lname": "Bell"}
  
  filter = { year: "2019" , lname: "Adams" }
  filter = { fname : { $regex: /^N/ } , year:"2020" }
  filter = {$sort : 'asc',  year: -1}
  filter = {}

  var nsort = { fname: 1}
  var ysort = {year: 1}
  SCTCMembers.find(filter).sort(ysort).sort(nsort).exec(function(err, result) {
  
    if (!err) {
      
      for ( v in result) {
         console.log( result[v].year ,result[v].fname, result[v].lname)

      }
     //db.dbclose( conn)
  
  
    }else{
      console.log("OK")
    }
  
  })




}