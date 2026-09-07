//Mit Task
//A -Task
function hisobHarib(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            //eger a indexsi b index ten bolsa 1 qosadi
            count++;
        }
    }
    return count;
}

console.log(hisobHarib("d", "adadadddd"));

//MITASK
//B-task
function sanash(sana) {
    const son = sana.match(/\d/g); // /[]/gi sgartga mofiq qilip beradi
    return son ? son.length : 0;
}
const result = sanash("fhdosjfhnkjs1177dsfdf77");
console.log(result);

//MITASK
//C-task
function tekshir(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(tekshir("qalaysan", "nasyalaq"));
console.log(tekshir("qlaysan", "jaqsi"));

//MITASK
//D -TASK
class Shop {
    constructor(non, lagmon, cola) {
        this.mahsulotlar = {
            non: non,
            lagmon: lagmon,
            cola: cola,
        };
    }

    // waqit farmatta qaytaratin medhod

    vaqtOl() {
        const now = new Date();
        const soat = String(now.getHours()).padStart(2, "0");
        const minut = String(now.getMinutes()).padStart(2, "0");
        return `${soat}:${minut}`;
    }

    qoldiq() {
        const vaqt = this.vaqtOl();
        const xabar = `hozir ${vaqt}da ${this.mahsulotlar.non}ta non, ${this.mahsulotlar.lagmon}ta lagmon va ${this.mahsulotlar.cola}ta cola mavjud!`;
        console.log(xabar);
        return xabar;
    }

    sotish(mahsulot, son) {
        if (this.mahsulotlar[mahsulot] === undefined) {
            console.log(`Xato: "${mahsulot}" degan mahsulot mavjud emas!`);
            return;
        }
        if (this.mahsulotlar[mahsulot] < son) {
            console.log(`Xato: yetarli ${mahsulot} yo'q!`);
            return;
        }
        this.mahsulotlar[mahsulot] -= son;
        console.log(`${this.vaqtOl()}da ${son}ta ${mahsulot} sotildi.`);
    }

    qabul(mahsulot, son) {
        if (this.mahsulotlar[mahsulot] === undefined) {
            console.log(`Xato: "${mahsulot}" degan mahsulot mavjud emas!`);
            return;
        }
        this.mahsulotlar[mahsulot] += son;
        console.log(`${this.vaqtOl()}da ${son}ta ${mahsulot} qabul qilindi.`);
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();

shop.sotish("non", 3);
shop.qabul("cola", 4);

shop.qoldiq(); //

// console.log("JAck MA Maslahatlari");
// const list = [
//     "jaqsi oqiwshi bolin'",
//     "duris basliq tan'lan'",
//     "ozin'izge islewdi baslan'",
//     "siz kushli bolgan narselerdi qilin'",
//     "jaslarg'a investitsiya qilin'",
//     "endi dem alin',paydasi joq endi",
// ];
// console.log("✅1=================1✅");
//CALLBACK ⬇️
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number ", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 3000);
//         // callback(null, list[5]);          // test qilip koriwge singel qalay islewin
//     }
// }

// console.log(`passed here 0`);

// maslahatBering(65, (err, data) => {
//     //`` strin qilip kor insert a number BEREDI
//     if (err) console.log(`ERROR:`, err);
//     console.log("javob:", data);
// });

// console.log(`passed here 1`);
// console.log("✅2=================2✅");
//ASYNC FUNCTION ⬇️
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number ");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         // return list[5];  //✅
//         return new Promise((resolve, reject) => {       //PROMISE 🫡🛑 waqti kelgende
//             // setTimeout
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });

//         // setTimeout(function () {               //  setTimeout core modul islemeydi
//         //     return list[5];
//         // }, 3000);
//         // callback(null, list[5]);          // test qilip koriwge singel qalay islewin
//     }
// }
// console.log("🛑=======🛑");
// console.log(`passed here 0`);
//CALL VIA THEN/CATCH islettik. ⬇️
// maslahatBering(10)
//     .then((data) => {
//         // maslahatBering(30)
//         //     .then((data) => {
//         //         maslahatBering(50)
//         //             .then((data) => {
//         //                 console.log(`javob: `, data); //promise hell
//         //             })
//         //             .catch((err) => {
//         //                 console.log(`ERROR:`, err);
//         //             });
//         //         console.log(`javob: `, data);
//         //     })
//         //     .catch((err) => {
//         //         console.log(`ERROR:`, err);
//         //     });
//         console.log(`javob: `, data);
//     })
//     .catch((err) => {
//         console.log(`ERROR:`, err);
//     });
// console.log(`passed here 1`);
// console.log("🛑=======🛑");

//asyn/await ⬇️ arqali qurdiq saddaliqti beredi //promise hell  BOLMAYDI
// async function run() {
//     let javob = await maslahatBering(20); //Promise isletkende 65 birinshi isleydi. await amelge aspasa keyinge otpeydi ne sebeb bari VARABLE tek bolip turgani ushin!!!
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// console.log("✅3=================3✅");
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number ", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             // setInerval 👍🏼
//             callback(null, list[5]);
//         }, 3000);
//         // callback(null, list[5]);          // test qilip koriwge singel qalay islewin
//     }
// }

// console.log(`passed here 0`);

// maslahatBering(20, (err, data) => {
//     //`` strin qilip kor insert a number BEREDI
//     if (err) console.log(`ERROR:`, err);
//     console.log("javob:", data);
// });

// console.log(`passed here 1`);
