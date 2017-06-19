import { PLAYER_MOVE, CHANGE_PLAYER } from './actions'
import { InitialState } from './store/initial_state'
// import { Square } from './store/square'


const playerSymbol = {
  1: "O",
  2: "X"
}

// Reducers
export function ticTacToe(state = new InitialState, action) {
  switch (action.type) {

    case PLAYER_MOVE:
      var newSquares = Object.assign([], state.squares)
      var mark = playerSymbol[state.currentPlayer]

      newSquares[action.position] = mark

      return Object.assign({}, state, { squares: newSquares })

    case CHANGE_PLAYER:
      if (state.currentPlayer == 1)
        var nextPlayer = 2
      else
        var nextPlayer = 1

      return Object.assign({}, state, { currentPlayer: nextPlayer })

    default:
      return state
  }
}
