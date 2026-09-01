// //BU ESKI VERSIYA EKAN 🛑
// const mongodb = require("mongodb");
// const http = require("http");
// let db;
// const connectionString =
//     "mongodb+srv://erdas0101:Anarxan1973%24@cluster0.nhyuu7c.mongodb.net/Reja?appName=Cluster0";

// mongodb.connect(
//     connectionString,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     },
//     (err, client) => {
//         if (err) {
//             console.log("ERROR on connection MongoDB:", err);
//         } else {
//             console.log("MongoDB connection succeed");
//             module.exports = client;
//             const app = require("./app");
//             const server = http.createServer(app);
//             const PORT = 3000;
//             server.listen(PORT, function () {
//                 console.log(
//                     `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
//                 );
//             });
//         }
//     },
// );
const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
    "mongodb+srv://erdas0101:Anarxan1973%24@cluster0.nhyuu7c.mongodb.net/Reja?appName=Cluster0";

const client = new MongoClient(connectionString);

let db;

async function start() {
    try {
        await client.connect();
        console.log("MongoDB connection succeed");

        db = client.db("Reja");
        module.exports = db;

        const app = require("./app");
        const server = http.createServer(app);

        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(
                `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
            );
        });
    } catch (err) {
        console.log("ERROR on connection MongoDB:", err);
    }
}

start();
