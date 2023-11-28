const protectRoute = async (req, res, next) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(`Error while signing up user: `, err.message);
    }
}