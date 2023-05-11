exports.erro404 = (req, res) => {
    res.status(404).json({ "message": "path not found" });
}