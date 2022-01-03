const express = require('express');
const router = express.Router();
const runs = require('../../Runs');

// Gets all runs
router.get('/', (req, res) => res.json(runs)); 

// Get single run
router.get('/:id', (req, res) => {
    const found = runs.some(run => run.id === (req.params.id));

    if (found) {
    res.json(runs.filter(run => run.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No run found with the id of ${req.params.id}` });
    }
});

module.exports = router;