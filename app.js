import axios from "axios"

async function getUser(userID) {
    const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`)
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/users/${number}"+userID)
    try {
        console.log(data, post)
       } catch (error) {
       console.log(error)
       }
       
}

   
export default getUser