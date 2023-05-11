const healthChecker = (req, res) => {
    res.json({ "message": "api is running" });
}

const erro404 = (req, res) => {
    res.status(404).json({ "message": "path not found" });
}


module.exports = {
    healthChecker,
    erro404
}