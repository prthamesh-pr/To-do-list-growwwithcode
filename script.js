let inputText = document.getElementById("inputText");
let clickHandler = document.getElementById("clickHandler");
let inputList = document.getElementById("inputList");

clickHandler.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Give Input First");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    inputList.appendChild(li);
    inputText.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u274C";
    li.appendChild(span);
  }
});
inputList.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }    
})