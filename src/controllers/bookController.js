
const books = []
let currentId = 1;


exports.createBook = (req, res) => {
    const { title, author, publishedYear, price } = req.body
    const book = { id: currentId++, title, author, publishedYear, price };
    books.push(book)
    res.status(201).json(book)
}

//to get all books
exports.getAllBooks = (req, res) => {
    res.json(books)
}



// Get a book by Id
exports.getBookById = (req, res) => {
    const book = books.find((b) => {
        return b.id === parseInt(req.params.id)
    })

    if (!book)
        return res.status(404).send('Book not Found');

    res.json(book);
}

//Update book By Id

exports.updateBookById = (req, res) => {
    const book = books.find((b) => {
        return b.id === parseInt(req.params.id)
    })

    if (!book)
        return res.status(404).send('Book Not Found')

    const { title, author, publishedYear, price } = req.body;

    if (title) {
        book.title = title
    }

    if (author) {
        book.author = author
    }

    if (publishedYear) {
        book.publishedYear = publishedYear
    }

    if (price) {
        book.price = price
    }
    res.json(book)
}

//partial Update book by Id

exports.partialUpdateBookById = (req, res) => {
    const book = books.find((book) => {
        return book.id === parseInt(req.params.id)
    })

    if (!book)
        return res.status(404).send('Book not Found');

    const { title, author, publishedYear, price } = req.body

    if (title !== undefined) {
        book.title = title
    }

    if (author !== undefined) {
        book.author = author
    }

    if (publishedYear !== undefined) {
        book.publishedYear = publishedYear
    }

    if (price !== undefined) {
        book.price = price
    }

    res.status(400).json(book)
}

//Delete a book by id

exports.deleteBookById = (req, res) => {
    const index = books.findIndex((b) => {
        return b.id === parseInt(req.params.id)

    })

    if (index === -1) {
        return res.status(404).send('Book Not Found')
    }
    books.splice(index, 1)
    res.status(200).json(
        {
            "messege": "Book Deleted Successfully"
        }
    )
}



