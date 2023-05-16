/**
 * Returns a JSON response confirming that the API is running.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} - A JSON response with the message "api is running".
 */
export const healthChecker = (req, res) => {
    res.json({ "message": "api is running" });
}

/**
 * Sends a JSON response with a 404 status code and a message indicating that
 * the requested path was not found.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {undefined}
 */
export const erro404 = (req, res) => {
    res.status(404).json({ "message": "path not found" });
}
