console.log("web server boshlash");
const { log } = require("console");
const express = require("express");
const app = express(); // instans jasaw kerek ham expressdan obj jiberedi ha bul arqali bir neshe is qilamiz express web server quramiz
const http = require("http");

//EXPRESTI $ BOLIMDE PAYDA QILAMIZ ✅

//1 exp kirip kelip atirgan mag bay/ kod jaziladi. KIRISH CODE ✅
app.use(express.static("public")); // <==har qanday br kirip kelip atirgan zaproslar un public folderi ashiq degen KOREDI degen publikdi clentlerge aship beerip atirmiz css style img lardi jaylaymiz
app.use(express.json()); //<= json data obj aylantiradi klent ham. web server ortasindagi data json korinisinde boladi
app.use(express.urlencoded({ extended: true })); // <== html dan tradiotanal request form post qilganda express server qabul qilip aladi .

//2 : hazirse kerek emes SESSION CODE 🔜

//3 EJS template engine. SSR — bu restoranga borganingizda ovqat oshxonada (serverda) tayyorlanib, sizga tayyor holda olib kelinishi kabi. 🛑 arqali backenda html frontent jasap klentke jiberemiz view jasaw VIEW CODE ✅  SSR yaki BSSR ==> Server-Side Rendering — bu HTML sahifani serverda tayyor holda yasab, brauzerga to'liq tayyor HTML ko'rinishida jo'natish usuli.
app.set("views", "views"); //
app.set("view engine", "ejs"); //ejs ekenin korsetip atirmiz

//4  ROUTING CODE ✅
// app.get("/hello", function (req, res) {
//     res.end("<h1>HELLO WORLD BY DANNY</h1>");
//     // res.end(`<h1 style="background: red">HELLO WORLD BY DANNY</h1>`); TEST
// });
// app.get("/gift", function (req, res) {
//     res.end("<h1> Siz sawgalar bolimindesiz </h1>");
// });     //🛑🛑TEST🛑🛑
// app.post("/create-item", (req, res) => {
//     console.log(req.body); //req.body 🛑TEST🛑
//     res.json({ test: "success" });
// });

app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app); // core modelimiz  createServer app qabul qiladi ecp past qildiq
let PORT = 3000; // portqa listen qildiramiz
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});

//npm start >> localhost:3000; ✅ bul saytta tekseriw
