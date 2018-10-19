const zones = require('../utils/zones');
const db = require('../utils/db');
const launches = db.getCollection('launches');


exports.train = (req,res,next)=>{
    const myZoneIn = zones.getZone(parseInt(req.params.in,10));
    const myZoneOut = zones.getZone(parseInt(req.params.out,10));

    const tempOutput = new Object;
    tempOutput[myZoneOut] = 1;

    const dataTrain = {
      input : myZoneIn,
      output : tempOutput
    };

    launches.insert(dataTrain);
    console.log(launches.data);
    res.status(200).json({
      in : myZoneIn,
      out : myZoneOut,
    });
}
