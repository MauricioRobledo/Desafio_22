import { ContenedorMongo } from "../persistence/managers/contenedorMongo.js"
import { productModel } from "../persistence/models/modelProduct.js"
import { UserModel } from "../persistence/models/user.js"

const productApi = new ContenedorMongo(productModel)
const userApi = new ContenedorMongo(UserModel)

export const root= {
    getProducts: async()=>{
        return await productApi.getAll()
    },

    getUser: async()=>{
        return await userApi.getAll()
    },

    getProductById: async(_id)=>{
        return await productApi.getById(_id)
    },
    updateProduct: async(_id, product)=>{
        const newProduct = JSON.parse(JSON.stringify(product))

        return await productApi.updateById(_id, newProduct)
    },
    addProduct: async(product)=>{
        const newProduct = JSON.parse(JSON.stringify(product))
        return await productApi.save(newProduct.product)
    },
    deleteProductById: async(_id)=>{
        return await productApi.deleteById(_id)
    }
}
