const add_button = document.getElementById("add_button");
const note_input = document.getElementById("note_input");
let notes;
loadNotes();











////// BU YAPI SONRADAN EKLENEN BUTON VS ICIN KULLANILIR ↓
document.addEventListener("click",function(e){
    if(e.target && e.target.id == "delete_button"){
        deleteNote(event);
    }
})
////// BU YAPI SONRADAN EKLENEN BUTON VS ICIN KULLANILIR ↑


add_button.addEventListener("click",addNewPage);


function addNewPage(){

let note_page_div = document.createElement("div");
let note_context_div = document.createElement("div");
let note_context = document.createElement("textarea");
let note_buttons_div = document.createElement("div");
let delete_button_element = document.createElement("button");

const window = document.getElementById("window_div");


note_page_div.className = "note_page";
note_context_div.className = "note_context";
note_context.className = "not_icerigi";
note_context.cols = 30;
note_context.rows = 10;

note_buttons_div.className = "note_buttons";
delete_button_element.className = "btn";


delete_button_element.id = "delete_button";
delete_button_element.append("Delete");


let note = document.createTextNode("Yeni notumuz bu olsun")
//let asd = $("#note_input").val(); ////
let asd = note_input.value;

note_buttons_div.appendChild(delete_button_element);

note_context.append(asd);
note_context_div.appendChild(note_context);
note_page_div.appendChild(note_context_div);
note_page_div.appendChild(note_buttons_div);

window.appendChild(note_page_div);
console.log("sa")

setItemToLS(note_input.value); // Girilen notu LS a göndermek için

}

function deleteNote(event){
//console.log(event.target);
let page = event.target.parentElement.parentElement;
let window = event.target.parentElement.parentElement.parentElement;
let text = event.target.parentElement.parentElement.children[0].textContent;
console.log(text);
window.removeChild(page);
deleteNoteFromLS(text);

}

function loadNotes(){
    // LS dan notları çekme
    notes = getItemsFromLS();
    
    for(let i = 0; i<= notes.length-1; i++){
        let note_page_div = document.createElement("div");
let note_context_div = document.createElement("div");
let note_context = document.createElement("textarea");
let note_buttons_div = document.createElement("div");
let delete_button_element = document.createElement("button");

const window = document.getElementById("window_div");


note_page_div.className = "note_page";
note_context_div.className = "note_context";
note_context.className = "not_icerigi";
note_context.cols = 30;
note_context.rows = 10;

note_buttons_div.className = "note_buttons";
delete_button_element.className = "btn";


delete_button_element.id = "delete_button";
delete_button_element.append("Delete");

let asd = notes[i] //

note_buttons_div.appendChild(delete_button_element);

note_context.append(asd);
note_context_div.appendChild(note_context);
note_page_div.appendChild(note_context_div);
note_page_div.appendChild(note_buttons_div);

window.appendChild(note_page_div);







    }
























}
function getItemsFromLS(){

    if(localStorage.getItem("notes") === null){
        notes = [];
    }else{
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    return notes;
}

function setItemToLS(newNote){
notes = getItemsFromLS();
notes.push(newNote);
localStorage.setItem("notes",JSON.stringify(notes));
}
function deleteNoteFromLS(delete_note){
    let notes = getItemsFromLS();
    notes.forEach(function(note,index){
        if(note === delete_note){
            notes.splice(index,1);
        }

    });
    localStorage.setItem("notes",JSON.stringify(notes));
}
