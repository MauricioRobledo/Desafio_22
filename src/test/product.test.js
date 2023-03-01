import supertest from "supertest";
import { expect } from "chai";
import { app } from "../server.js";

const request = supertest(app)

describe("api product test",()=>{

    afterEach(async()=>{
        await request.delete("/productos");
    });

    it("get products",async()=>{
        const response = await request.get("/productos")
        expect(response.status).equal(200)
    })

    
    it("post product",async()=>{
        const response = await request.post("/productos").send({
            title: "camisa",
            price: 6000,
            thumbnail: "camisa.png"
        })
        console.log(response.body)
        expect(response.status).equal(200)
    })

    it("if products exist get products by id",async()=>{
        const response = await request.post("/productos").send({
            title: "camisa",
            price: 6000,
            thumbnail: "camisa.png"
        })
        expect(response.status).equal(200)
        const productId = response.body._id
        const responseFindId = await request.get(`/productos/${productId}`)
        expect(responseFindId.status).equal(200)
        
    })

    
    it("if product exist update it",async()=>{
        const response = await request.post("/productos").send({
            title: "camisa",
            price: 6000,
            thumbnail: "camisa.png"
        })
        expect(response.status).equal(200)
        const productId = response.body._id
        const responseUpdate = await request.put(`/productos/${productId}`).send({
            title: "remera",
            price: 4000,
            thumbnail: "remera.png"
        })
        expect(responseUpdate.status).equal(200)
    })
    
    it("if products exist get products by id",async()=>{
        const response = await request.post("/productos").send({
            title: "camisa",
            price: 6000,
            thumbnail: "camisa.png"
        })
        expect(response.status).equal(200)
        const productId = response.body._id
        const responseDelete = await request.delete(`/productos/${productId}`)
        expect(responseDelete.status).equal(200)
        
    })


})
