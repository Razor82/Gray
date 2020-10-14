const express = require('express');
const router = express.Router();



// All Authors Route
router.get('/', (request, response) => {
    response.send('All Authors')
})


// New Author Route
router.get('/new', (request, response) => {
    response.send('New Author');
})


// Post Author Route
router.post('/', (request, response) => {
    response.send('Create');
})


module.exports = router;