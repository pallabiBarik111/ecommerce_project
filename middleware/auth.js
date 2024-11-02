const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    console.log("token", token)
    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    } try {
        const decoded = jwt.verify(token, 'test123')
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({ error: "Invalid  denied" });

    }
}