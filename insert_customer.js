const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "insert into customers (name,address) values('Tong','Songkhla 29'),('Peter','Pattani 88'),('Dat','Nakron 364'),('tam','pattani 469'),('lam','yala 445')";

    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Customer Created.")
    })
});