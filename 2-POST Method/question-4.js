// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */

const API = "https://6795021eaad755a134eaf99e.mockapi.io/user"

async function addUser(users) {
    for(let user of users){
        try{
       const res = await fetch(API, {
        body: JSON.stringify(user),
        method: "POST",
        headers: {"Content-type": "application/json"},
       })
       const data = await res.json()
       console.log("user add:", data);
       
        } catch(er){
      console.log("Errorre", er);
      
        }

    }
}
addUser(users)
//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
const formPost = document.querySelector("#post")

formPost.addEventListener("submit", async (event)=>{
    event.preventDefault();
  const user = {
 firstName: event.target.firstName.value,
  lastName: event.target.lastName.value,
  phoneNumber : event.target.phoneNumber.value,
}
  try{
    const res =  await fetch(API, {
        body: JSON.stringify(user),
        method: "POST",
        headers: {"Content-type": "application/json"},
    })
    const data = await res.json()
    alert("successfully add", data)
   } catch(er){
    console.log("Errrorre", er);
    alert("failed")
  }
   
})

