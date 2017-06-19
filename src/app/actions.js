// action types

export const PLAYER_MOVE = 'PLAYER_MOVE'
export const CHANGE_PLAYER = 'CHANGE_PLAYER'


// action creators

export function playerMove(position) {
  return {
    type: PLAYER_MOVE,
    position: position
  }
}

export function changePlayer() {
  return { type: CHANGE_PLAYER }
}
