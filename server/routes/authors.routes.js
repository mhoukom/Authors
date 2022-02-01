const Author = require('../controllers/author.controller');

module.exports = (app) => {
    app.get("/api/authors", Author.findAll)
    app.post("/api/authors", Author.create)
    app.get("/api/authors/:_id", Author.findOne)
    app.put("/api/authors/:_id", Author.update)
    app.delete("/api/authors/:_id", Author.delete)
}