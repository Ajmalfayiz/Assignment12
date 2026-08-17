const validateBook = (req, res, next) => {
    const { title, author, publishedYear, price } = req.body

    if (!title || !author || !publishedYear || !price) {
        return res.status(400).json('title, author, publishedYear, price are Required')
    }
    next()
}
module.exports = validateBook