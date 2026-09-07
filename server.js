const http = require("http");
const mongodb = require("mongodb"); // NOSQL => Document DataBase turi

let db;
const connectionString =
    "mongodb+srv://erdas0101:Anarxan1973%24@cluster0.nhyuu7c.mongodb.net/Reja?appName=Cluster0";
/*mogodb => client => connection => client.db();
QALAM + CRUD
GET => READ
POST => CREAD,UPDATE,DELETE
*/

//TCP

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            // console.log(client); // database conaction objeck
            module.exports = client; // argi tarepte ./server bolip tur

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000; // 3000 portda ishga tushirip ber
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port:${PORT}, http://localhost:${PORT}`,
                );
            });
        }
    },
);
