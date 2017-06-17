import { playerMove, changePlayer } from './actions'

export class Grid {

  constructor (store) {
    this.listenforPlayerMove(squares)
    this.store = store
  }

  squares () {
    var squareElems = document.getElementsByTagName('td')
    return Array.from(squareElems)
  }

  listenforPlayerMove () {
    this.squares.forEach((sq) => {
      this.addEvent(sq)
    })
  }

  addEvent(element) {
    element.addEventListener('click', this.storePlayerMove.bind(this))
  }

  storePlayerMove (event) {
    this.store.dispatch(playerMove(event.target.id))
  }

  renderMove (store) {

  }
}
