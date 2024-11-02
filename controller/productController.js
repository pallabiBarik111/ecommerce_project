
const Product = require('../model/product');

//Crete _Product......

exports.createProduct = async (req, res) => {
    try {
        const data = req.body // Assuming the request 
        const newProduct = new Product(data);
        const response = await newProduct.save()
        console.log('data is saved ')

        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}



// for GET_Product....

exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find();
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}

// Get_By category..................

exports.getProductBycategory = async (req, res) => {
    try {
        const categoryType = req.params.categoryType;
        if (categoryType == 'Electronics' || categoryType == 'Clothing' || categoryType == 'Books' || categoryType == 'Other') {
            const response = await Product.find({ category: categoryType });
            console.log('response fetched');
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'invalid work Type' });

        }

    }
    catch (err) {
        console.log('error')
    }

}



//Update _Product.................

exports.getupdateProduct = async (req, res) => {
    try {

        const productId = req.params.id;
        const updatedproductdata = req.body;
        const response = await Product.findByIdAndUpdate(productId, updatedproductdata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: 'product  not found' })

        }
        console.log('data updated');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}

//Delete_Product..........

exports.getDeleteProduct = async (req, res) => {
    try {

        const productId = req.params.id;
        const deletedproductdata = req.body;
        const response = await Product.findByIdAndDelete(productId, deletedproductdata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: ' product not found' })

        }
        console.log('data deleted');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}