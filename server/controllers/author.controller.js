const Author = require('../models/author');

module.exports = {

    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => res.json({authors: allAuthors}))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    findOne: (req, res) => {
        Author.findById(req.params._id)
            .then(oneAuthor => res.json({author: oneAuthor}))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    create: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Author.findByIdAndUpdate(req.params._id, req.body, {new: true, runValidators: true})
            .then((updatedAuthor) => {res.json(updatedAuthor)})
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Author.findByIdAndDelete(req.params._id)
            .then(result => res.json(result))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}