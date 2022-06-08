var generatebutton = document.getElementById("genpass");

generatebutton.addEventListener("click", () => {
    let checkedTab = [];
    let passlen = document.getElementById("len").value;
    var password = "";
    let randomL;

    let checkbox = document.getElementsByClassName("chkbx")


    //check what checkboxes are checked
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            checkedTab.push((i + 1));
        } else if (checkbox[i].checked == false)
            checkedTab.push(0);
    }

    //delete 0 from array
    for (let i = 0; i < checkedTab.length; i++) {
        if (checkedTab[i] === 0) {
            checkedTab.splice(i, 1);
            i--;
        }

    }



    for (let i = 0; i < passlen; i++) {
        let random = Math.floor(Math.random() * (checkedTab.length))

        let option = checkedTab[random]
        if (option == 1) {
            randomL = Math.floor(Math.random() * 25 + 97);
            password = password + String.fromCharCode(randomL);
        } else if (option == 2) {
            randomL = Math.floor(Math.random() * 25 + 65);
            password = password + String.fromCharCode(randomL);
        } else if (option == 3) {
            randomL = Math.floor(Math.random() * 10 + 48);
            password = password + String.fromCharCode(randomL);
        } else if (option == 4) {
            randomL = Math.floor(Math.random() * 6 + 33);
            password = password + String.fromCharCode(randomL);
        }
    }

    let output = document.getElementById("output");
    output.setAttribute("value", password);



    generatebutton.classList.add("active")
    setInterval(() => {
        generatebutton.classList.remove("active")
    }, 300)
})


//copy to clipboard

var buttonToCopy = document.getElementById("copy");

buttonToCopy.addEventListener("click", () => {
    var copyText = document.getElementById("output");

    copyText.select();
    copyText.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(copyText.value);

    buttonToCopy.classList.add("active")
    setInterval(() => {
        buttonToCopy.classList.remove("active")
    }, 300)
})