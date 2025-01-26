/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer

const data = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){
            throw Error(`Errorrr: ${res.status}`)
        }
        const data = await res.json()
        console.log(data);
        
    }catch(er){
     console.log("Errorr", er);
     
    }
}

data()