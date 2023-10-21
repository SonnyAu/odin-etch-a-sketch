const container = document.getElementById("container");
const body = document.getElementById("body");
const numSquares = document.getElementById("num-squares");
let userInput = "";
createGrid(16, container);
numSquares.addEventListener("click", function(e) {
    userInput = +(window.prompt("How many squares per side?"));
    if (userInput <= 100) {
        document.getElementById("container").remove();
        const newContainer = document.createElement("div");
        newContainer.setAttribute("id", "container");
        newContainer.setAttribute("max-height", "1000px");
        newContainer.setAttribute("max-width", "1000px");
        newContainer.setAttribute("display", "flex");
        newContainer.setAttribute("flex-wrap", "wrap");
        newContainer.setAttribute("justify-content", "center");
        newContainer.setAttribute("align-items", "center");
        body.appendChild(newContainer);
        const newDiv = document.getElementById("container");
        createGrid(userInput, newDiv);
    } else if (userInput > 100) {
        alert("The max amount is 100 squares, please enter a viable number.");

    }

});



function createGrid(num=16, container){
    let width = String((1000/num) - 2) + "px";
    let height = String((1000/num) - 2) + "px";
    for (let i = 0; i != num; i++){
        const box = document.createElement("div");
        box.style.width = width;
        box.style.height = height;
        box.style.border = "1px solid";
        container.appendChild(box);
        box.addEventListener("mouseenter", function( event ) {   
            event.target.style.backgroundColor = "purple";
        }, false);
        box.addEventListener("mouseleave", function( event ) {   
            event.target.style.color = "";
        }, false);
        for (let j = 1; j != num; j++){
            const box = document.createElement("div");
            box.style.width = width;
            box.style.height = height;
            box.style.border = "1px solid";
            container.appendChild(box);
            box.addEventListener("mouseenter", function( event ) {   
                event.target.style.backgroundColor = "purple";
            }, false);
            box.addEventListener("mouseleave", function( event ) {   
                event.target.style.color = "";
            }, false);
        }
    }
}
