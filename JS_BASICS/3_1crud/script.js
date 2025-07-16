// function delete1(){
//     let ele = document.querySelector("h2");
//     let parent = ele.parentNode;
//     parent.removeChild(ele);
// }


function addTodo(){
    let ele = document.querySelector("input");
    let todo1 = ele.value;
    console.log(todo1);

    const newDiv = document.createElement("Div");
    newDiv.innerHTML = "<div>" + todo1 + "</div>";
    document.querySelector("body").appendChild(newDiv);
}