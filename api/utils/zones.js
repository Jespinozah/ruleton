const constants = require('./constants');
const brain = require('brain.js');


let trainedNet;

function getZone(element) {
  let temp= '';

  if (constants.AZONE.indexOf(element) >= 0) {
    temp = "A";
  }

  if (constants.BZONE.indexOf(element) >= 0) {
    temp = "B";
  }

  if (constants.CZONE.indexOf(element) >= 0) {
    temp = "C";
  }

  if (constants.DZONE.indexOf(element) >= 0) {
    temp = "D";
  }

  return temp;
}

function processTrainingData(data) {
  return data.map( d=> {
    return {
      input: d.input,
      output: d.output,
    }
  })
}

function train(data) {
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
};

function execute(input) {
  console.log(input);

    let results = trainedNet(input);


    console.log(results)

    let output;
    let certainty;

    /* test*/
    let probability = 0;
    let zone;
    for(let prop in results) {
      if (results[prop] >= probability) {
        probability = results[prop];
        zone = prop;
      }
      console.log(`results.${prop} = ${results[prop]}`);

    }
    console.log(probability + " "+ zone);
    /* test*/

    return "Estoy " + probability + "% seguro que saldra " + zone;
}

module.exports.getZone = getZone;
module.exports.train = train;
module.exports.execute = execute;
module.exports.execute = execute;
