// import { Grid } from './components/grid'
import { playerMove, changePlayer } from './actions'

export class Game {
  constructor (store) {

    function displayMark() {
      var squares = store.getState().squares

      squares.forEach((sq, i) => {
        if (!!sq) {
          var sqElem = document.getElementById(i)
          sqElem.innerText = sq
        }
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
      var elems = document.getElementsByTagName('td')

      Array.from(elems).forEach((elem) => {
        addEvents(elem)
      })
    }

    function addEvents(element) {
      element.addEventListener('click', storePlayerMove.bind(this))
      element.addEventListener('click', disableListeners.bind(this))
      element.addEventListener('click', switchPlayer)
    }

    function storePlayerMove(event) {
      store.dispatch(playerMove(event.target.id))
    }

    function switchPlayer() {
      store.dispatch(changePlayer())
    }

    function disableListeners(event) {
      var old_element = event.target

      // clone the node to remove all listeners
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
    }

    listenforPlayerMove();
    store.subscribe(displayMark);
    store.subscribe(checkForEndGame);
  }

}

