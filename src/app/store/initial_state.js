// import { Grid } from '../components/grid'

export class InitialState {
  constructor () {
    this.currentPlayer = 1
    this.squares = new Array(9).fill(null)
    this.gameOver
  }
}
