//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
const API = "https://6795021eaad755a134eaf99e.mockapi.io/user"

async function getUser() {
    try{
        const res = await fetch(API)
        const users = await res.json()
         console.log("all users", users);
        return users;
    }catch(er){
    console.log("error", er);
    
    }
}
getUser()

async function deleteFamily() {
    try{
        const users = await getUser()
        const family = users.filter(user => ["Dalton"].includes(user.lastName))
        for (let elm of family){
            try{
                const res = await fetch(`${API}/${elm.id}`, {method: "DELETE"})
                const data = await res.json()
                console.log("user deleted", data);
                
            } catch(er){
                console.log(er, "Errorrr");
                
            }
        } 
    } catch(er){
        console.log("Errorr", er);
        
    }
}
deleteFamily()
//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


//*End of story :)

async function deleteEvenId() {
    try{
        const users = await getUser()
        const evenId = users.filter(user => user.id % 2 === 0)
        for(let user of evenId){
            try{
                const res = await fetch(`${API}/${user.id}`, {method: "DELETE"})
                const data = await res.json()
                console.log("even id user deleted", data);
                
            }catch(er){
             console.log("Errrorr", er);
             
            }
        }
    }catch(er){
        console.log("Errrorr", er);
        
    }
}

deleteEvenId()