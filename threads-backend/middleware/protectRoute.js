import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({message: 'Unauthorized'})
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(`Error while signing up user: `, err.message);
    }
}

export default protectRoute