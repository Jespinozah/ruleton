const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/numbersController');

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
