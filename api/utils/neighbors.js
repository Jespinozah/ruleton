const  Circular = require('./circular');
const numbers = require('./constants');

function neighbors(req) {
  const number = parseInt(req.params.number,10);
  const numberNeighbors = parseInt(req.params.numberNeighbors, 10);

  const aux = numbers.indexOf(number);
  const c = new Circular(numbers,aux);

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

  return neighbors;
}

module.exports = neighbors;
