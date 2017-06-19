const sets = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9]
]


export function detectFullSets() {
  sets.forEach( (set) => {
    var setFull = evaluateSetFull(set)

    if !!setFull {
      evaluateForWin(set)
    }
  }
}

function evaluateSetFull(set) {
  var squares = store.getState().squares
  var setFull = true

  set.forEach((position) => {
    if !squares[position] {
      setFull = false
    }
  })
  return setFull
}

function evaluateForWin(set) {
  var squares = store.getState().squares

  var win = squares[set[0]] == squares[set[1]] == squares[set[2]]

  return win
}

// function evaluateSetsForGameOver() {
// }
