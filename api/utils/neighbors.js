const  Circular = require('./circular');
const constants = require('./constants');

function neighbors(req) {
  const number = parseInt(req.params.number,10);
  const numberNeighbors = parseInt(req.params.numberNeighbors, 10);

  const aux = constants.NUMBERS.indexOf(number);
  const c = new Circular(constants.NUMBERS,aux);

  const neighbors = {
    right : [],
    number: number,
    left : [],
  }

  for (i = 0;  i < numberNeighbors; i++ ) {
      neighbors.right.push(c.next());
  }

  c.currentIndex = aux;

  for (i = 0; i < numberNeighbors ; i++) {
      neighbors.left.push(c.prev());
  }

  neighbors.right.sort(function(a,b){ return a-b;});
  neighbors.left.sort(function(a,b){ return a-b;});

  return neighbors;
}

module.exports = neighbors;
