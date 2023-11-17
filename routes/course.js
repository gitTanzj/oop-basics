const express = require('express')

const router = express.Router()

const courseController = require('../controllers/course')

router.get('/:name', courseController.getCourseByName)

module.exports = router