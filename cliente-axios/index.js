import axios from "axios";


const baseURL = "http://localhost:8080"

const getProducts = async()=>{
    try{
        const response = await axios.get(`${baseURL}/productos`)
        console.log(response)
    }catch(error){
        console.log(error)
    }
}


const getProductsId = async()=>{
    try{
        const response = await axios.get(`${baseURL}/productos/1`)
        console.log(response)
    }catch(error){
        console.log(error)
    }
}


const postProducts = async()=>{
    try{
        const response = await axios.post(`${baseURL}/productos`,{
            title: "Pantalon",
            price: 2000,
            thumbnail: "pantalon.jpg"
        })
        console.log(response)
    }catch(error){
        console.log(error)
    }
}


const deleteProducts = async()=>{
    try{
        const response = await axios.delete(`${baseURL}//productos/1`)
        console.log(response)
    }catch(error){
        console.log(error)
    }
}


const putProducts = async()=>{
    try{
        const response = await axios.put(`${baseURL}//productos/1`,{
            title: "Camisa",
            price: 5000,
            thumbnail: "camisa.jpg"
        })
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

getProducts()
getProductsId()
postProducts()
deleteProducts()
putProducts()