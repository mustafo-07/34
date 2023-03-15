const form = document.querySelector(".form"),
    inpName = document.querySelector(".inpName"),
    inpRel = document.querySelector(".inpRel"),
    inpPhone = document.querySelector(".inpPhone"),
    button = document.querySelector(".btn"),
    namebox = document.querySelector(".name-box"),
    relbox = document.querySelector(".rel-box"),
    phonebox = document.querySelector(".phone-box");

// resultName = document.querySelector(".result-name"),
// resultRel = document.querySelector(".result-rel"),
// resultPhone = document.querySelector(".result-phone"),
// name_remove = document.querySelector(".name_remove"),
// rel_remove = document.querySelector(".rel_remove"),
// phone_remove = document.querySelector(".phone_remove");


button.addEventListener("click", function(e) {
    e.preventDefault();
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contact2 = document.createElement('div');
    contact2.classList.add('contact2');
    const contact3 = document.createElement('div');
    contact3.classList.add('contact3');
    if (inpName.value === "") {
        resultName.textContent = ("Enter Name!");
        resultRel.textContent = ("Enter Relation!");
        resultPhone.textContent = ("Enter Phone!");
    } else if (inpName.value) {
        nameSpan = document.createElement('span');
        nameSpan.textContent = inpName.value;
        contact.appendChild(nameSpan);
        deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        contact.appendChild(deleteButton);
        namebox.appendChild(contact);
        deleteButton.addEventListener('click', () => {
            namebox.removeChild(contact);
            // namebox.removeChild(resultName);
        })

    } else {
        console.log("Hato");
    }
    if (inpRel.value) {
        relateSpan = document.createElement('span');
        relateSpan.textContent = inpRel.value;
        contact2.appendChild(relateSpan);
        relbox.appendChild(contact2);
        deleteButton.addEventListener('click', () => {
            relbox.removeChild(contact2);
        })

    } else {
        console.log("Hato");
    }
    if (inpPhone.value) {
        numberSpan = document.createElement('span');
        numberSpan.textContent = inpPhone.value;
        contact3.appendChild(numberSpan);
        phonebox.appendChild(contact3);
        deleteButton.addEventListener('click', () => {
            phonebox.removeChild(contact3);
        })
    } else {
        console.log("Hato");
    }
    // button.reset();

})