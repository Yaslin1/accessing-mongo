import { MongoClient } from "mongodb"; //getting function from library tool box call mongodb.
import { mongoURI } from "./secrets.js";// getting our secret connection string

const connection = new MongoClient(mongoURI); // connecting to our cluster database using our serect connection string.

await connection.connect(); // openning conenciton to our cluster

const db = connection.db('Cluster0'); // connecting to the specific database

await db.collection('students').insertOne({ name: 'John Therlonge', age:26 }); //add student 

const results = await db.collection("students").findOne({ name: "John Therlonge"}); // get student

console.log(results);

connection.close(); // disconnect for security purpose