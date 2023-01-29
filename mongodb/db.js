const mongoose = require("mongoose");
const { isNumberObject } = require("util/types");

function hi(){

    return "hi"
}

let url = "mongodb+srv://cs157:tomato1349@cs157.qljr1c3.mongodb.net/tennis?retryWrites=true&w=majority"




function dbconnect(){

 const conn = mongoose.connect(
    // Use your own connection string here. Make sure the database name is EmployeeApp
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     // useFindAndModify: false
    },
    function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB - tennis database ...");
      }
    }
  );

    return conn

}


function dbclose(conn){

    conn.close()
}

exports.hi= hi
exports.dbconnect = dbconnect
exports.dbclose = dbclose