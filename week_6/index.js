

function addTodo(){
    console.log("button was clicked")
    const input = document.getElementById("list_input")
    console.log("input value =", input.value)

    const ul = document.querySelector("ul")
    console.log(ul)

    const li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
}