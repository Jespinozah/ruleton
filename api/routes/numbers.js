const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/numbersController');
const trainController = require('../controllers/trainController');

router.get('/', (req, res, next)=> {
  res.status(200).json({
    message: 'Handling get numbers'
  });
});

router.post('/', (req, res, next)=> {
  res.status(200).json({
    message: 'Handling post numbers'
  });
});

router.get('/:numberNeighbors/:number', numbersController.getNeighbors);

router.get('/train/:in/:out', trainController.train);

router.patch('/:number',(req,res,next)=>{
    res.status(200).json({
      message: 'Update number',
    });
});


router.delete('/:number',(req,res,next)=>{
    res.status(200).json({
      message: 'Delete number',
    });
});



module.exports = router;
