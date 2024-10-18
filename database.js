const { MongoClient } = require("mongodb");
// create a free m0 clustor in mongodb website
// get the connection string
const url =
  "mongodb+srv://bharatruidas261:QSAeCvT8HQ3LuUbp@namastanode.oizzq.mongodb.net/";
// install mongodb campus
const client = new MongoClient(url);
// Database Name
const dbName = "Helloworld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...
  // insert a document into the collection
  const data = {
    name:"Rajib",
    age:"20"
  }
// const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);
//   Read the data from database 
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  // delete data from database
  const deleteResult = await collection.deleteMany([data]);
console.log('Deleted documents =>', deleteResult);
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
