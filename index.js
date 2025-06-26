const express = require('express');
const app = express();
const mongoose = require('mongoose')

// const Product = require('./models/products.model.js');
const productRoute = require('./routes/product.route.js');

// app.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })

//middleware
app.use(express.json()) // configuration setting
app.use(express.urlencoded({extended:false}))   // to add through form url encoded

//routes
app.use('/api/products',productRoute);

app.get('/', (req, res) => {
    res.send("This is from backend updated")
})


mongoose.connect("Your connection String")
    .then(() => {
        console.log("connected to database");
        app.listen(3000,()=>{
        console.log("Server is running on port 3000")
        })
    })
    .catch(() => {
        console.log("not connected to database")
    })

// //get
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //post
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         //    console.log(product)
//         res.status(200).json(product)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //update
// app.put('/api/products/:id', async (req, res) => {
//     try {

//         const { id } = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             res.status(404).json({ message: "Product not found" });
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //delete
// app.delete('/api/products/:id',async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(404).json({message:"Product not found"});
//         }
//         res.status(200).json({message:"Product deleted successfully"});
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// })



//npm i express
// npm i nodemon -D
// npm install mongodb
// npm i mongoose
