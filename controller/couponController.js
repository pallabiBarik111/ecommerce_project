
const Coupon = require('../model/coupon');

exports.createCoupon= async (req, res) => {
    try {
        const data = req.body // Assuming the request 
        const newCoupon= new Coupon(data);
        const response = await newCoupon.save()

        console.log('data is saved ')

        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}


// for GET_Coupon....

exports.getCoupon = async (req, res) => {
    try {
        const data = await Coupon.find();
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}



//Update _User.................

exports.getupdateCoupon = async (req, res) => {
    try {

        const couponId = req.params.id;
        const updatedcoupondata = req.body;
        const response = await Coupon.findByIdAndUpdate(couponId, updatedcoupondata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: 'coupon not found' })

        }
        console.log('data updated');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}



// DELETE _User...............

exports.getDeleteCoupon = async (req, res) => {
    try {

        const couponId = req.params.id;
        const deletedcoupondata = req.body;
        const response = await Coupon.findByIdAndDelete(couponId, deletedcoupondata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: 'coupon not found' })

        }
        console.log('data deleted');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}