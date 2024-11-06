const columns = document.querySelectorAll(".column__cards");

let draggeCard;
const dragStart = (event) => {
    draggeCard = event.target;
    event.dataTransfer.effectAllowed = "move";
};

const dragOver = (event) => {
    event.preventDefault();
};

const dragEnter = ({target}) => {
if(target.classList.contains("column__cards")){
    target.classList.add("column--highlight");
}};

const dragLeave = ({target}) => {
  target.classList.remove("column--highlight")      
    };

const drop = ({target}) => {

if(target.classList.contains("column__cards")){
 target.classList.remove("column--highlight")
            target.append(draggeCard); 
            } };

const createCard = ({target}) => {
if(!target.classList.contains("column__cards")) return;

const card = document.createElement("section");

card.className="card";
card.draggable="true";
card.contentEditable="true"

card.addEventListener("focusout",()=>{
    card.contentEditable="false"


    if(!card.textContent) card.remove();
})
card.addEventListener("dragstart", dragStart)
target.append(card);
card.focus()

};

columns.forEach((column) =>{
column.addEventListener("dragover", dragOver);
column.addEventListener("dragenter", dragEnter);
column.addEventListener("dragleave", dragLeave);
column.addEventListener("drop", drop);
column.addEventListener("dblclick", createCard);
});


function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}

function updateCount() {
    document.getElementById('countParaFazer').innerText = document.getElementById('paraFazerCards').children.length;
    document.getElementById('countPlanejar').innerText = document.getElementById('planejarCards').children.length;
    document.getElementById('countExecutar').innerText = document.getElementById('executarCards').children.length;
    document.getElementById('countRevisar').innerText = document.getElementById('revisarCards').children.length;
    document.getElementById('countAjustar').innerText = document.getElementById('ajustarCards').children.length;
    document.getElementById('countFeito').innerText = document.getElementById('feitoCards').children.length;
        }
    
        // Exemplo: Adicionar um item para testar
const paraFazerCards = document.getElementById('paraFazerCards');
const novoItem = document.createElement('div');
updateCount();
    
        // Listener para monitorar mudanças e atualizar a contagem
const observer = new MutationObserver(updateCount);
    
    observer.observe(paraFazerCards, { childList: true });
    observer.observe(document.getElementById('planejarCards'), { childList: true });
    observer.observe(document.getElementById('executarCards'), { childList: true });
    observer.observe(document.getElementById('revisarCards'), { childList: true });
    observer.observe(document.getElementById('ajustarCards'), { childList: true });
    observer.observe(document.getElementById('feitoCards'), { childList: true });



    function findTransactions(){
        firebase.firestore()
        .collection('Kanban')
        .get()
        .then(snapshot =>{
            console.log(snapshot);
        })
    }
