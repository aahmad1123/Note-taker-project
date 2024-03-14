const router = require('express').Router()

const notesRouter = require('./notes')

router.use('/notes', notesRouter)

module.exports = router

// routing index that enables api route