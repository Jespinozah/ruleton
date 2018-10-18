const zones = require('../utils/zones');

exports.train = (req,res,next)=>{
    const myZoneIn = zones.getZone(parseInt(req.params.in,10));
    const myZoneOut = zones.getZone(parseInt(req.params.out,10));

    res.status(200).json({
      in : myZoneIn,
      out : myZoneOut,
    });
}
