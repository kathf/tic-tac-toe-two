// import { Grid } from './components/grid'
import { playerMove, changePlayer } from './actions'

export class Game {
  constructor (store) {

    function displayMark() {
      var squares = store.getState().squares
      squares.forEach((sq) => {
        var sqElem = document.getElementById(sq.position)
        sqElem.innerText = sq.mark
      })
    }

    function checkForEndGame() {
      var squares = store.getState().squares


      //  - check if player won
      //   - render winner
      //  - check if stalemate
      //   - render game over
    }

    function listenforPlayerMove() {
      var squareElems = document.getElementsByTagName('td')
      var squares = Array.from(squareElems)

      squares.forEach((sq) => {
        addEvents(sq)
      })
    }

    function addEvents(element) {
      element.addEventListener('click', storePlayerMove.bind(this))
      element.addEventListener('click', switchPlayer)
    }

    function storePlayerMove(event) {
      store.dispatch(playerMove(event.target.id))
    }

    function switchPlayer() {
      store.dispatch(changePlayer())
    }

    // var grid = new Grid()
    listenforPlayerMove();
    store.subscribe(displayMark);
    store.subscribe(checkForEndGame);
  }

}

