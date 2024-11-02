const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// Creat User........

exports.createUser = async (req, res) => {
    try {
        const data = req.body // Assuming the request 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt)
        const newUser = new User({ ...data, password: hashedPassword });
        const response = await newUser.save()
        console.log('data is saved ')

        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}



// user Login................

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ error: 'password is worng' })

        }
        const token = jwt.sign({ userId: user._id, username: user.username }, 'test123', {
            expiresIn: '24h'
        });
        res.status(200).json({ message: 'Login successfully', token })



    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'internal server error...' })

    }
}

// for GET_USER....

exports.getUser = async (req, res) => {
    try {
        const data = await User.find();
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });
    }
}

// Get UserBYwork..............

exports.getUserBywork = async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'admin' || workType == 'customer') {
            const response = await User.find({ work: workType });
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


//Update _User.................

exports.getupdateUser = async (req, res) => {
    try {

        const userId = req.params.id;
        const updateduserdata = req.body;
        const response = await User.findByIdAndUpdate(userId, updateduserdata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: 'user not found' })

        }
        console.log('data updated');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}

// DELETE _User...............

exports.getDeleteUser = async (req, res) => {
    try {

        const userId = req.params.id;
        const deleteduserdata = req.body;
        const response = await User.findByIdAndDelete(userId, deleteduserdata, {
            new: true, // Return the updated document
            runValidators: true, //Run mongoose validation 
        })
        if (!response) {
            return res.status(404).json({ error: 'user not found' })

        }
        console.log('data deleted');
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" });

    }
}