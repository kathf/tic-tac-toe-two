// import { Grid } from './components/grid'
import { playerMove, changePlayer } from './actions'

export class Game {
  constructor (store) {
    this.store = store

    // var grid = new Grid()
    this.listenforPlayerMove(store);
    store.subscribe(this.displayMark)
    store.subscribe(this.checkForEndGame)
    store.subscribe(changePlayer);
  }

  displayMark() {
    var squares = store.getState().squares
    squares.forEach((sq) => {
      console.log(sq)
    })
  }

  checkForEndGame() {
    var squares = store.getState().squares
  }

  listenforPlayerMove(store) {
    var squareElems = document.getElementsByTagName('td')
    var squares = Array.from(squareElems)

    squares.forEach((sq) => {
      this.addEvent(sq, store)
    })
  }

  addEvent(element, store) {
    element.addEventListener('click', this.storePlayerMove.bind(this))
  }

  storePlayerMove(event) {
    this.store.dispatch(playerMove(event.target.id))
  }
}
