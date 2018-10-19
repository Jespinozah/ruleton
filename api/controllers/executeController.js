const zones = require('../utils/zones');
const db = require('../utils/db');
const launches = db.getCollection('launches');


exports.execute = (req,res,next)=>{
  const number = parseInt(req.params.number,10);

    res.status(200).json({
      in : 'hi',
    });
}
