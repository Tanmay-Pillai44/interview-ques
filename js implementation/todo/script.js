const list_btn = document.getElementById('list-btn')
const list_input = document.getElementById('list-input')
const card_box = document.getElementById('card-box')

let arr= []

function addList() {
    if(list_input.value !== "") {
        let obj ={
            id: Date.now(),
            obj_input: list_input.value
        }
        arr.push(obj);

        createCard();

        list_input.value = "";
    } else {
        alert("Please Enter input")
    }
}

function createCard() {
    const card = document.createElement('div');
    card.setAttribute('class', 'dynamic-cards')
    for(let i = 0; i < arr.length; i++) {
        card.setAttribute("id", arr[i].id);
        card.innerHTML =`<div>${arr[i].obj_input}</div>
                            <button onclick="deleteCard(this)">delete</button>`

        card_box.appendChild(card);
    }
}

function deleteCard(e) {
    let card = e.parentElement;
    const card_id = e.parentElement.id;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id === Number(card_id)) {
            arr.splice(i, 1);
            break;
        }
    }
    card.remove();
}


