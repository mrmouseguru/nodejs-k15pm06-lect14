import { MongoClient } from "mongodb";

const main = async () =>{

   let conn =  await MongoClient.connect("mongodb://127.0.0.1");

   let db = conn.db("example");

   let myColl = db.collection("myCollection");

   await myColl.insertOne({binky : "winky", num: 2024});



};

main();