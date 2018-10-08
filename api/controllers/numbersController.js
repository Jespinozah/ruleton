const  Circular = require('../utils/circular');
const neighbors = require('../utils/neighbors');

exports.getNeighbors = (req,res,next)=>{
  const neighborsNumbers = neighbors(req);
    res.status(200).json({
      left : neighborsNumbers.left,
      number : neighborsNumbers.number,
      right: neighborsNumbers.right,
    });
}
