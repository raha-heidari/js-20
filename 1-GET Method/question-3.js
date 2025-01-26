/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

 const article = document.querySelector("article");

// ! Answer
fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
.then(users => {
    users.forEach(user => {
        const div = document.createElement("div")
        div.className = "card"
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
       h2.innerText = user.name 
       const company = user.company.name
       p.innerText = `Company: ${company}`
       div.append(h2)
       div.append(p)

       article.append(div)
    })
})
.catch(er => {console.log("Errrorrr", er);
})