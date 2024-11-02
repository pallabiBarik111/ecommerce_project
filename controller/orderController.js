
// create order.............

const Order = require('../model/order');

exports.createOrder = async (req, res) => {
    try {
        const data = req.body // Assuming the request 
        const newOrder = new Order(data);
        const response = await newOrder.save()
        console.log('Order  is saved ')

        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}

// for GET_Order........................

exports.getOrder = async (req, res) => {
    try {
        const data = await Order.find();
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}


//Update _Order.................

exports.getupdateOrder = async (req, res) => {
    try {

        const orderId = req.params.id;
        const updatedorderdata = req.body;
        const response = await Order.findByIdAndUpdate(orderId, updatedorderdata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: 'order   not found' })

        }
        console.log('order  updated');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}

// Cancel_Order...............

exports.getDeleteOrder = async (req, res) => {
    try {

        const orderId = req.params.id;
        const deletedorderdata = req.body;
        const response = await Product.findByIdAndDelete(orderId, deletedorderdata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: ' order not found ...' })

        }
        console.log('order  Cancelled..');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}