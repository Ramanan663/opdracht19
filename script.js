const animalS = (e) => {
    console.log(e.target.textContent);
    const spottedAnimal = e.target.textContent;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(spottedAnimal));
    const list = document.getElementById("spotted-animals-list");
    list.appendChild(listItem);

    const removeFirstItemButton = document.getElementById(
        "remove-first-item-button"
    );
    removeFirstItemButton.addEventListener("click", removeFirstItem);

    const removeAllButton = document.getElementById("remove-all-button");
    removeAllButton.addEventListener("click", removeAll);
};

const $bigfiveButton = document.querySelectorAll(".big-five-button");
//const $todolist = document.getElementById("spotted-animals-list");
$bigfiveButton.forEach((animalButton) => {
    animalButton.addEventListener("click", animalS);
});

const removeFirstItem = () => {
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
};

const removeAll = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
};

//console.log($bigfiveButton);
/*$bigfiveButton.addEventListener("click", (e) => {
    //console.log(e);
    if (e.type === "click") {
        let todo = e.target.value;
        let $todoItem = document.createElement("li");
        $todoItem.innerText = "Lion";
        $todolist.appendChild($todoItem);
    }
});

/*const $toDo = document.getElementById("toDo");
        const $todolist = document.getElementById("todolist");
        //console.log($toDo);
        $toDo.addEventListener("keypress", (e) => {
            //if enter komt niet see nast ENTER
            if (e.code === "Enter" && e.target.value !== "") {
                let todo = e.target.value;
                let $todoItem = document.createElement("li");
                $todoItem.innerHTML = `
                    <label for="1">${todo}</label>
                
                `;
                $todolist.appendChild($todoItem);
                //LIST CLEAR
                $toDo.value = "";
            }
        });*/