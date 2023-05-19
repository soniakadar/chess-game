export const getCharacter = file => String.fromCharCode(file + 97)


export const createPosition = () => {
    const position = new Array(8).fill('').map(x => new Array(8).fill(''))
    for (let i = 0; i < 8; i++) {
        position[1][i] = 'pawn_w'
        position[6][i] = 'pawn_b'
    }

    position[0][0] = 'rook_w'
    position[0][1] = 'knight_w'
    position[0][2] = 'bishop_w'
    position[0][3] = 'queen_w'
    position[0][4] = 'king_w'
    position[0][5] = 'bishop_w'
    position[0][6] = 'knight_w'
    position[0][7] = 'rook_w'

    position[7][0] = 'rook_b'
    position[7][1] = 'knight_b'
    position[7][2] = 'bishop_b'
    position[7][3] = 'queen_b'
    position[7][4] = 'king_b'
    position[7][5] = 'bishop_b'
    position[7][6] = 'knight_b'
    position[7][7] = 'rook_b'

    return position
}

export const copyPosition = position => {
    const newPosition = new Array(8).fill('').map(x => new Array(8).fill(''))

    for (let rank = 0; rank < 8; rank++) {
        for (let file = 0; file < 8; file++) {
            newPosition[rank][file] = position[rank][file]
        }
    }

    return newPosition

}