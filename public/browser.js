console.log("Frontend JS jumis basladi");

function itemTemplate(item) {
    return `<li
    style="background-color: aliceblue"; class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
            <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1">
                Ozgartirish
            </button>
            <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm">
                Ochirish
            </button>
        </div>
    </li>`;
}

let createField = document.getElementById("create-field"); // input IDsi

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault(); //tradiotanal api stop

    if (!createField.value.trim()) {
        alert("Iltimos, biror nima yozing!");
        createField.focus();
        return;
    }

    axios //rest api amelge asirip beriwshi texnalogiya asyn method pastegi call//✅jsondi avto tarizde object qilip beredi
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document
                .getElementById("item-list") //listin uslap pastegilerdi amelge asiradi res ishindegi data.
                .insertAdjacentHTML("beforeend", itemTemplate(response.data)); // uslap bolip RESt api jiberedi joqardagi
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("Itimos qaytadan harakat qiling!");
        });
});

document.addEventListener("click", function (e) {
    //e ne basilganin uslap bered log qolip teksersen koresen =>target=>classlist buttonlar =>contain=>delete me barma?degen
    //delete oper
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq ochirmoqchimisiz?")) {
            //alertqa uqsagan narse
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") }) //getartibut arqali id uslaymiz app jiberemiz ol sol id arqali oshiredi
                .then((response) => {
                    console.log(response.data); //app re.json({state:"succes"}) usi
                    e.target.parentElement.parentElement.remove(); //bul korinisti oshiredi
                })
                .catch((err) => {
                    console.log("Itimos qaytadan harakat qiling!");
                });
        }
    }
    //edit opr
    if (e.target.classList.contains("edit-me")) {
        // alert(`siz edit tugmasini bostingiz`);

        let userInput = prompt(
            "O'zgartirish kiriting",
            e.target.parentElement.parentElement.querySelector(".item-text")
                .innerHTML,
        ); //utirden keyingi ekinshi qiymat. toshkalar cllaslardi uslaydi
        if (userInput) {
            // console.log(userInput);
            console.log("STEP-1");
            axios
                .post("/edit-item", {
                    id: e.target.getAttribute("data-id"),
                    new_input: userInput,
                })
                .then((response) => {
                    console.log("STEP-6");
                    console.log(response.data);
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text",
                    ).innerHTML = userInput; //ozgergen qiymatqa teneymiz
                })
                .catch((er) => {
                    console.log("Itimos qaytadan harakat qiling!");
                });
        }
    }
});

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
        alert(response.data.state); //hammesi oshdi dep shigadi app jazilgan
        document.location.reload(); //en aqirgi step bul
    });
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("day-mode");

    if (document.body.classList.contains("day-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
