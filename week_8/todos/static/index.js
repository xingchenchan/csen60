async function getTodos(){
    const response = await fetch("http://localhost:3000/api/todos")
    // console.log(response)
    const data = await response.json()
    console.log(data, "\n")

    const ul = document.querySelector("ul")

    data.forEach(todos => {
        const li = document.createElement("li")
        li.textContent = todos.description
        ul.appendChild(li)
    });

}``

getTodos()