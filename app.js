console.log("Web Serverni boshlash");

const express = require("express");

const app = express(); // application jaratadi  bu arqli keyingiz sozlamalar qosiladi
const moment = require("moment");

// MongoDB call
const db = require("./server").db(); //usi arqali CRUD qiliw ushin
const mongodb = require("mongodb");

// 1-step. Kirish code.

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2-step. Session code.

// 3-step. Views code.
app.set("views", "views");
app.set("view engine", "ejs");

// 4-step. Routing code. Serverni yaratish.
app.get("/", (req, res) => {
    console.log("user entered /");
    // console.log(" READ Step 2 Frontend > Backend ✅");
    // console.log("RAED Step 3 Backend > DataBase ✅");
    db.collection("plans") //<=REJA ishindegi collection
        .find()
        .toArray((err, data) => {
            // console.log("READ Step 4 DataBase > Backend ✅");
            // console.log(data); //coment al bul misal ne alip kelip atirganin koriw ushin

            if (err) {
                console.log(err);
                res.end("something went wrong");
            } else {
                // console.log("READ Step 5 DataBase > Backend + HTML ✅");
                res.render("reja", { items: data });
            }
        });
});

app.post("/create-item", (req, res) => {
    console.log("CR user entered /create-item");
    // console.log("CR Step 2 Frontend > Backend ✅");

    // console.log(req.body);
    const new_reja = req.body.reja;

    // const time = moment().format("YYYY-MM-DD");
    // console.log(time);
    // console.log("CR Step 3  Backend > DataBase ✅");

    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        // console.log("CR Step 4   DataBase >  Backend  ✅");
        // console.log(data);
        console.log(data.ops);
        res.json(data.ops[0]);
        // console.log("CR Step 5     Backend > Frontend ✅");
    });
});

app.post("/delete-item", (req, res) => {
    // console.log(" DEL Step 2 Frontend > Backend ✅");
    // console.log("DEL Step 3  Backend > DataBase ✅");
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectID(id) },
        function (err, data) {
            // console.log("DEL Step 4   DataBase >  Backend  ✅");
            res.json({ state: "success" });
            // console.log("DEL Step 5     Backend > Frontend ✅");
        },
    );
});

app.post("/edit-item", (req, res) => {
    console.log("STEP-2");
    const data = req.body;
    console.log(data);
    console.log("STEP-3");
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectID(data.id) }, //bu bormi
        { $set: { reja: data.new_input } }, //bor bolsa shunga yangila
        function (err, data) {
            console.log("STEP-4");
            console.log("STEP-5");
            res.json({ state: "success" });
        },
    );
    // res.end("done");
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "Hamma rejalar ochirildi" });
        });
    }
});

module.exports = app;
