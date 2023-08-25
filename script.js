const containerText = document.querySelector(".container-text");
const createBtn =   document.querySelector(".createBtn");

showSavedData();

createBtn.addEventListener("click", ()=>{
    const para = document.createElement("p");
    const imgDel = document.createElement("img");

    para.setAttribute("contenteditable","true");
    para.className="input-text";

    imgDel.src="images/delete.png"

    containerText.appendChild(para).appendChild(imgDel);
    

});

containerText.addEventListener("click", (e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData();
    }else if(e.target.tagName==="P"){
        const notes = document.querySelectorAll(".input-text");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                saveData();
            }
        })
    }
    
});


function saveData(){
    localStorage.setItem("Notes",containerText.innerHTML);
}

function showSavedData(){
    containerText.innerHTML = localStorage.getItem("Notes");
}

containerText.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})

