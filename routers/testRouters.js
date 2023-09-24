// testRoutes.js

const express = require('express');
const router = express.Router();

// Define your test routes
router.get('/test1', (req, res) => {
    res.json({ message: 'This is test route 1' });
});

router.get('/test2', (req, res) => {
    res.json({ message: 'This is test route 2' });
});

module.exports = router;