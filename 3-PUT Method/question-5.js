//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */
const API = "https://6795021eaad755a134eaf99e.mockapi.io/user"

const form = document.querySelector("form")

form.addEventListener("submit", async (event)=>{
    event.preventDefault();

    const API = `https://6795021eaad755a134eaf99e.mockapi.io/user/1`;
  
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phoneNumber : event.target.phoneNumber.value,
    };
    fetch(API, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });


//*To be continue...