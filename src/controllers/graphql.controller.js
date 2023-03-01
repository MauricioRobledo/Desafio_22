import {buildSchema} from "graphql";
import {graphqlHTTP} from "express-graphql";
import { root } from "../services/graphql.service.js";

const graphqlSchema = buildSchema(`
    type Product{
        _id:Int,
        title:String,
        price:Int,
        thumbnail:String
    }

    type User{
        _id:String,
        name:String,
        adress:String,
        age:Int,
        phone:Int,
        username:String,
        picture:String
    }

    input UserInput{
        name:String,
        age:Int,
        phone:Int
    }

    input ProductInput{
        title:String,
        price:Int,
        thumbnail: String
    }

    type Query{
        getProducts:[Product],
        getProductById(_id:Int): Product
        getUser:[User]
    }

    type Mutation{
        addProduct(product:ProductInput): Product,
        deleteProductById(_id:Int): String,
        updateProduct(_id:Int, product:ProductInput): Product
    }
`)

export const productGraphController = ()=>{
    return graphqlHTTP({
        schema:graphqlSchema,
        rootValue:root,
        graphiql:true
    })
}