const express = require('express')
const app = express();
// const mongoose = require('mongoose');

const db=require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// const User=require('./model/user')
// const Product=require('./model/product')


const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const orderRouter=require('./router/orderRouter')
const couponRouter=require('./router/couponRouter')


app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use ('/coupon',couponRouter)




app.get('/', (req, res) => {
    res.send("okay i am ready to .....")

})



// post_methd for user.........

// app.post('/user', async (req, res) => {
//     try {
//         const data = req.body // Assuming the request 
//         const newUser= new User(data);
//         const response = await newUser.save()
//         console.log('data is saved ')

//         res.status(200).json(response)

//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: "internal server error",err });
//     }
// })

// get_methd for user......... 


// app.get('/user',async (req, res) => {
//     try {
//         const data = await User.find();
//         console.log('data fetched')
//         res.status(200).json(data)

//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({ err: "internal server error" });
//     }
// })





app.listen(3000, () => {
    console.log('server is runninng ')
})























// app.post('/idil', (req, res) => {
//     var custromrized_idil = {
//         name: "rava_idil",
//         size: "10 cm",
//         is_samber: true
//     }
//     res.send(custromrized_idil)
// })







// const notes =require('./note')
// console.log('the  server is running ')
// const  age =notes.age;
// const result =notes.AddNumber(age+1,3)
// console.log (result);
// console.log(age)





















































//  var fs= require('fs')
//  var os=require('os')


// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('test.txt','hiii'+ user.username +'!\n',()=>{
//     console.log('file is created');
// });
// console.log(os);
// console.log(fs);



