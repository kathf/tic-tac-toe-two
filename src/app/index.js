import { createStore } from 'redux'
import { ticTacToe } from './reducers'
import { Game } from './game'

let store = createStore(ticTacToe)
const game = new Game(store)


// print all store changes to the console

function printState() {
  console.log(store.getState());
}

store.subscribe(printState);
