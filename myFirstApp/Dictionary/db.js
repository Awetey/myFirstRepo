var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Naomi@2021",
  database: "entries"
  
});
con.connect(function(err) {
    if (err) throw err;
   // con.query("SELECT * FROM customers where name like 'V%'", function (err, result, fields) {
      //con.query("SELECT name,address FROM customers ", function (err, result, fields) {
        con.query("SELECT *FROM entries ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }); 