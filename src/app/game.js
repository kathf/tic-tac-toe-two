// import { Grid } from './components/grid'
import { playerMove, changePlayer } from './actions'

export class Game {
  constructor (store) {

    function displayMark() {
      var squares = store.getState().squares
      squares.forEach((sq) => {
        console.log(sq)
      })
    }

    function checkForEndGame() {
      var squares = store.getState().squares
    }

    function listenforPlayerMove() {
      var squareElems = document.getElementsByTagName('td')
      var squares = Array.from(squareElems)

      squares.forEach((sq) => {
        addEvent(sq)
      })
    }

    function addEvent(element) {
      element.addEventListener('click', storePlayerMove.bind(this))
    }

    function storePlayerMove(event) {
      store.dispatch(playerMove(event.target.id))
    }

    // var grid = new Grid()
    listenforPlayerMove();
    store.subscribe(displayMark);
    store.subscribe(checkForEndGame);
    store.subscribe(changePlayer);
  }

}


    //  - UI change to show X or O
    //  - check if player won
    //   - render winner
    //  - check if stalemate
    //   - render game over
