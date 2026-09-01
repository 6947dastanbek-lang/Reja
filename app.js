// console.log("web server boshlash");
// const { log } = require("console");
// const express = require("express");
// const app = express(); // instans jasaw kerek ham expressdan obj jiberedi ha bul arqali bir neshe is qilamiz express web server quramiz
// // const http = require("http");
// const fs = require("fs");

// let user;

// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });

// //MongoDB  connect emas endi shaqirish boladi⬇️
// const db = require("./server").db();

// //EXPRESTI $ BOLIMDE PAYDA QILAMIZ ✅

// //1 exp kirip kelip atirgan mag bay/ kod jaziladi. KIRISH CODE ✅
// app.use(express.static("public")); // <==har qanday br kirip kelip atirgan zaproslar un public folderi ashiq degen KOREDI degen publikdi clentlerge aship beerip atirmiz css style img lardi jaylaymiz
// app.use(express.json()); //<= json data obj aylantiradi klent ham. web server ortasindagi data json korinisinde boladi
// app.use(express.urlencoded({ extended: true })); // <== html dan tradiotanal request form post qilganda express server qabul qilip aladi .

// //2 : hazirse kerek emes SESSION CODE 🔜

// //3 EJS template engine. SSR — bu restoranga borganingizda ovqat oshxonada (serverda) tayyorlanib, sizga tayyor holda olib kelinishi kabi. 🛑 arqali backenda html frontent jasap klentke jiberemiz view jasaw VIEW CODE ✅  SSR yaki BSSR ==> Server-Side Rendering — bu HTML sahifani serverda tayyor holda yasab, brauzerga to'liq tayyor HTML ko'rinishida jo'natish usuli.s
// app.set("views", "views"); //
// app.set("view engine", "ejs"); //ejs ekenin korsetip atirmiz

// //4  ROUTING CODE ✅
// // app.get("/hello", function (req, res) {
// //     res.end("<h1>HELLO WORLD BY DANNY</h1>");
// //     // res.end(`<h1 style="background: red">HELLO WORLD BY DANNY</h1>`); TEST
// // });
// // app.get("/gift", function (req, res) {
// //     res.end("<h1> Siz sawgalar bolimindesiz </h1>");
// // });     //🛑🛑TEST🛑🛑
// app.post("/create-item", (req, res) => {
//     // console.log(req.body); //req.body 🛑TEST🛑
//     // res.json({ test: "success" });
// });

// app.get("/author", (req, res) => {
//     res.render("author", { user: user });
// });
// app.get("/", function (req, res) {
//     db.collection("plans")
//         .find()
//         .toArray((err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.end("Somthing went worng");
//             } else {
//                 console.log(data);
//                 res.render("reja",{items:data});
//             }
//         });
// });

console.log("web server boshlash");

const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

const db = require("./server"); // ✅ .db() SIZ — chunki server.js dan db ning o'zi eksport qilingan

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// KIRISH CODE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// VIEWS CODE
app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", async (req, res) => {
    console.log("user entered / create-item");
    try {
        console.log(req.body);
        const new_reja = req.body.reja;
        await db.collection("plans").insertOne({ reja: new_reja });
        res.end("successfully added");
    } catch (err) {
        console.log(err);
        res.end("Somthing went worng");
    }
});

app.get("/", async function (req, res) {
    console.log("user entered/");
    try {
        const data = await db.collection("plans").find().toArray();
        console.log(data);
        res.render("reja", { items: data });
    } catch (err) {
        console.log(err);
        res.end("Somthing went worng");
    }
});

module.exports = app;
